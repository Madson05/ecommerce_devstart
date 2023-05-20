import {test, expect} from "vitest"
import request from "supertest"
import app from "../../server"


test("GET de dados do usuário autenticado", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };

  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id; 
  const token = responseLogin.body.token;
  const response = await request(app)
    .get(`/customers/${id}`)
    .set("Authorization", `Bearer ${token}`);
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("id");
  expect(response.body).toHaveProperty("name");
  expect(response.body).toHaveProperty("email");
  expect(response.body).not.toHaveProperty("password");
});

test("GET de dados do usuário não autenticado", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const response = await request(app).post("/customers/login").send(payload);
  const id = response.body.id;
  const responseGet = await request(app).get(`/customers/${id}`);
  expect(responseGet.status).toBe(400);
  expect(responseGet.body).toHaveProperty("error");
  expect(responseGet.body.error).toBe("Não autorizado");
});


test("GET de dados do usuário autenticado com id inválido", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload); 
  const token = responseLogin.body.token;
  const response = await request(app)
    .get(`/customers/123`)
    .set("Authorization", `Bearer ${token}`);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("Não autorizado");
});

test("GET de dados do usuário autenticado com token inválido", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id;
  const response = await request(app)
    .get(`/customers/${id}`)
    .set("Authorization", `Bearer 123`);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("jwt malformed");
});

test("GET de dados do usuário autenticado com token vazio", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id;
  const response = await request(app)
    .get(`/customers/${id}`)
    .set("Authorization", `Bearer `);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("jwt must be provided");
});