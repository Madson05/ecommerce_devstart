import productRepository from "../repositories/product.repository"

class productService{
  static async createproduct(title: string, description: string, price: number){
    return await (productRepository.createProduct(title, description, price))
  }
}

export default productService