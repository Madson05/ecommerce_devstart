import { IShopping } from "../@types/ShoppingType";
import shoppingRepository from "../repositories/shopping.repository";

class shoppingService {
  static async getShoppings() {
    return await shoppingRepository.getShoppings();
  }

  static async getShopping(userId: string) {
    return await shoppingRepository.getShopping(userId);
  }

  static async createshopping(shopping: IShopping) {
    return await shoppingRepository.createShopping(shopping);
  }

  static async updateShopping(id: string, shopping: IShopping) {
    return await shoppingRepository.updateShopping(id, shopping);
  }
  static async deleteShopping(shoppingId: string){
    return await shoppingRepository.deleteShopping(shoppingId);
  }
}

export default shoppingService;