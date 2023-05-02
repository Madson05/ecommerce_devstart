import productRepository from "../repositories/product.repository"

class productService{
  static async getProducts(){
    return await productRepository.getProducts()
  }

  static async getProduct(userId: string){
    return await productRepository.getProduct(userId)
  }
  
  static async createproduct(title: string, description: string, price: number){
    return await (productRepository.createProduct(title, description, price))
  }

}

export default productService