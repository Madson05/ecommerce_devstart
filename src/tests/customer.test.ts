import request from "supertest";
import { test, expect } from "vitest";
import app from "../server";
// import router from '../routes/customer.route';

test("Cadastro de user", async () => {
  const payload = {
    name: "Madson",
    email: `madson${Math.random()}@gmail.com`,
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
