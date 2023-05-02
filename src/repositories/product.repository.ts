import prismaClient from "../database/prismaClient";

class productRepository{

  static async getProducts(){
    const products = await prismaClient.product.findMany()
    return products;
  }

  static async createProduct(title: string, description: string, price: number){
    const product = await prismaClient.product.create({
      data: {
        title, 
        description,
        price
      }
    })
    return product
  }

  
}

export default productRepository