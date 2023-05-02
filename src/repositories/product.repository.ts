import prismaClient from "../database/prismaClient";

class productRepository{
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