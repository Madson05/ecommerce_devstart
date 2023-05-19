// import request from 'supertest';
// import{test, expect} from "vitest"
// import app from "../server";

// const response = await request(app).get('/api/users');


// test('Cadastro de shopping', async () => {

//   const customer = {
//     "email": "madson@gmail.com",
//     "password": "thissenhaissenha"
//   }




//   const url = 'http://localhost:4003/shoppings/';
//   const payload = {
//     "amount": 27.90,
//     "address": "Rua x",
//     "payed_at": new Date(),
//     "product_id": "f250cd23-d5f3-4580-b649-f9899a47d463",
//     "customer_id": 
    
//   };
  
//   const response = await axios.post(url, payload);

//   expect(response.status).toBe(200);
//   const {password: _, ...payloadCompare} = payload
//   expect(response.data).toMatchObject(payloadCompare)
// });