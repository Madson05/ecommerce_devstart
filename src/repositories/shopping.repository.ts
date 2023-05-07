import { IShopping } from "../@types/ShoppingType";
import prismaClient from "../database/prismaClient";

class shoppingRepository {
  static async getShoppings(customerId: string) {
    const shoppings = await prismaClient.shopping.findMany({
      where: {
        customer_id: customerId
      }
    });
    return shoppings;
  }

  static async getShopping(userId: string) {
    const shopping = await prismaClient.shopping.findUnique({
      where: {
        id: userId,
      },
    });
    return shopping;
  }

  static async createShopping(shopping: IShopping) {
    const shoppingCreated = await prismaClient.shopping.create({
      data: {
        ...shopping,
      },
    });
    return shoppingCreated;
  }

  static async updateShopping(shoppingId: string, shopping: IShopping) {
    const shoppingUpdated = await prismaClient.shopping.update({
      where: { id: shoppingId },
      data: {
        ...shopping,
      },
    });

    return shoppingUpdated;
  }

  static async deleteShopping(shoppingId: string) {
    const shoppingDeleted = await prismaClient.shopping.delete({
      where: { id: shoppingId },
    });
  }
}

export default shoppingRepository;
