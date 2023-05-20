import {test, expect} from "vitest"
import request from "supertest"
import app from "../../server"



test("exclusão de usuário não autenticado", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id;
  const response = await request(app).delete(`/customers/${id}`);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("Não autorizado");
});

test("exclusão de usuário com id inválido", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const token = responseLogin.body.token;
  const response = await request(app)
    .delete(`/customers/123`)
    .set("Authorization", `Bearer ${token}`);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("Não autorizado");
});

test("exclusão de usuário com token inválido", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id;
  const response = await request(app)
    .delete(`/customers/${id}`)
    .set("Authorization", `Bearer 123`);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("jwt malformed");
});

test("exclusão de usuário", async () => {
  const payload = {
    email: "teste@gmail.com",
    password: "thissenhaissenha",
  };
  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.user.id;
  const token = responseLogin.body.token;
  const response = await request(app)
    .delete(`/customers/${id}`)
    .set("Authorization", `Bearer ${token}`);
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("id");
  expect(response.body).toHaveProperty("name");
  expect(response.body).toHaveProperty("email");
  expect(response.body).not.toHaveProperty("password");
});

