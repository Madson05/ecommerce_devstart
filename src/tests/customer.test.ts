import request from "supertest";
import { test, expect } from "vitest";
import app from "../server";
// import router from '../routes/customer.route';

let idCustomer : string = ""

test("Cadastro de user", async () => {
  const payload = {
    name: "Madson",
    email: "exemplo@gmail.com",
    password: "thissenhaissenha",
  };

  const response = await request(app).post("/customers").send(payload);

  idCustomer = response.body.id

  expect(response.body).toHaveProperty("id");
  expect(response.body.name).toBe(payload.name);
  expect(response.body.email).toBe(payload.email);
});

test("Cadastro de user com email já cadastrado", async () => {
  const payload = {
    name: "Madson",
    email: `email@gmail.com`,
    password: "thissenhaissenha",
  };

  const response = await request(app).post("/customers").send(payload);

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("Email já cadastrado");
});

test("Cadastro de user com email inválido", async () => {
  const payload = {
    name: "Madson",
    email: `emailgmail.com`,
    password: "thissenhaissenha",
  };

  const response = await request(app).post("/customers").send(payload);

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe("Email inválido");
});

test("Cadastro de user com senha inválida", async () => {
  const payload = {
    name: "Madson",
    email: "email@gmail.com",
    password: "this",
  };
  const response = await request(app).post("/customers").send(payload);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe(
    "O campo password deve ter no minimo 6 caracteres."
  );
});

test("Cadastro de user com nome inválido", async () => {
  const payload = {
    name: "Ma",
    email: "exemplo@gmail.com",
    password: "thissenhaissenha"
  };
  const response = await request(app).post("/customers").send(payload);
  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error");
  expect(response.body.error).toBe(
    "O campo name deve ter no minimo 3 caracteres"
  );
});

test("GET de dados do usuário não autenticado", async () => {
  const response = await request(app).get(`/customers/${idCustomer}`)
  expect(response.status).toBe(400)
  expect(response.body).toHaveProperty("error")
  expect(response.body.error).toBe("Não autorizado")
})

test("GET de dados do usuário autenticado", async () => {
  const payload = {
    email: "exemplo@gmail.com",
    password: "thissenhaissenha",
  };

  const responseLogin = await request(app).post("/customers/login").send(payload);
  const id = responseLogin.body.id; 
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
