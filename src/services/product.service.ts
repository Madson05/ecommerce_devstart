import { IProduct } from "../@types/ProductType";
import productRepository from "../repositories/product.repository";

class productService {
  static async getProducts() {
    return await productRepository.getProducts();
  }

  static async getProduct(userId: string) {
    return await productRepository.getProduct(userId);
  }

  static async createproduct(product: IProduct) {
    return await productRepository.createProduct(product);
  }

  static async updateProduct(id: string, product: IProduct) {
    return await productRepository.updateProduct(id, product);
  }
  static async deleteProduct(productId: string){
    return await productRepository.deleteProduct(productId);
  }
}

export default productService;
