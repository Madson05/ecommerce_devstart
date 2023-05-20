import {test, expect} from "vitest"
import request from "supertest"
import app from "../../server"

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