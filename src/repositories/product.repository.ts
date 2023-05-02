import prismaClient from "../database/prismaClient";

class productRepository{

  static async getProducts(){
    const products = await prismaClient.product.findMany()
    return products;
  }

  static async getProduct(userId: string){
    console.log(userId)
    const product = await prismaClient.product.findUnique({
      where: {
        id: userId,
      }
      })
    return product;
  }

  static async createProduct(title: string, description: string, price: number){
    const products = await prismaClient.product.create({
      data: {
        title, 
        description,
        price
      }
    })
    return products
  }

  

  

  
}

export default productRepository