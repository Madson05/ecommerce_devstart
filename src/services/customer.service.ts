import { ICustomer } from "../@types/CustomerType";
import customerRepository from "../repositories/customer.repository";

class customerService {
  static async getCustomers() {
    return await customerRepository.getCustomers();
  }
  
  static async getCustomerByEmail(email: string) {
    const customer = await customerRepository.getCustomerByEmail(email);
    return customer;
  }

  static async getCustomer(userId: string) {
    const customer = await customerRepository.getCustomer(userId);
    if(!customer){
      throw new Error("Não autorizado") // se não existe id significa que ele está acessando um id não pertecente a ele próprio. (segurança)
    }
    return customer;
  }

  static async createcustomer(customer: ICustomer, email: string) {
    if(await customerRepository.getCustomerByEmail(email)){
      throw new Error("Email já cadastrado")
    }
    return await customerRepository.createCustomer(customer);
  }

  static async updateCustomer(id: string, customer: ICustomer) {
    return await customerRepository.updateCustomer(id, customer);
  }
  static async deleteCustomer(customerId: string){
    return await customerRepository.deleteCustomer(customerId);
  }
}

export default customerService;
