import {test, expect} from "vitest"
import axios from "axios"; "axios"


test('Cadastro de user', async () => {
  const url = 'http://localhost:4003/customers/';
  const payload = {
    
    "name": "Madson",
    "email": "madson7@gmail.com",
    "password": "thissenhaissenha"
    
  };
  
  const response = await axios.post(url, payload);

  expect(response.status).toBe(200);
  const {password: _, ...payloadCompare} = payload
  expect(response.data).toMatchObject(payloadCompare)
});