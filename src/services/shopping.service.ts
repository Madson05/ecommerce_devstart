import { IShopping } from "../@types/ShoppingType";
import shoppingRepository from "../repositories/shopping.repository";

class shoppingService {
  static async getShoppings(customerId: string) {
    return await shoppingRepository.getShoppings(customerId);
  }

  static async getShopping(shoppingId: string, customerId: string) {
    return await shoppingRepository.getShopping(shoppingId);
  }

  static async createshopping(shopping: IShopping) {
    return await shoppingRepository.createShopping(shopping);
  }

  static async updateShopping(id: string, shopping: IShopping) {
    return await shoppingRepository.updateShopping(id, shopping);
  }
  static async deleteShopping(shoppingId: string, customer_id: string){
    const shopping = await shoppingRepository.getShopping(shoppingId)
    if(!shopping){
      throw new Error("Shopping not found")
    }
    if(shopping.customer_id !== customer_id){
      throw new Error("You can't delete a shopping that is not yours")
    }

    return await shoppingRepository.deleteShopping(shoppingId);
  }
}

export default shoppingService;