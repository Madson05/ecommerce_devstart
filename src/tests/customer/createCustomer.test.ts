import request from "supertest";
import { test, expect } from "vitest";
import app from "../../server";
// import router from '../routes/customer.route';

test("Cadastro de user", async () => {
  const payload = {
    name: "Madson",
    email: "exemplo@gmail.com",
    password: "thissenhaissenha",
  };

  const response = await request(app).post("/customers").send(payload);


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


