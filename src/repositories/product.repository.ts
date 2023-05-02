import { IProduct } from "../@types/ProductType";
import prismaClient from "../database/prismaClient";

class productRepository {
  static async getProducts() {
    const products = await prismaClient.product.findMany();
    return products;
  }

  static async getProduct(userId: string) {
    const product = await prismaClient.product.findUnique({
      where: {
        id: userId,
      },
    });
    return product;
  }

  static async createProduct(product: IProduct) {
    const productCreated = await prismaClient.product.create({
      data: {
        ...product,
      },
    });
    return productCreated;
  }

  static async updateProduct(productId: string, product: IProduct) {
    const productUpdated = await prismaClient.product.update({
      where: { id: productId },
      data: {
        ...product,
      },
    });

    return productUpdated;
  }

  static async deleteProduct(productId: string) {
    const productDeleted = await prismaClient.product.delete({
      where: { id: productId },
    });
  }
}

export default productRepository;
