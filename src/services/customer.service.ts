import { ICustomer } from "../@types/CustomerType";
import customerRepository from "../repositories/customer.repository";

class customerService {
  static async getCustomers() {
    return await customerRepository.getCustomers();
  }

  static async getCustomer(userId: string) {
    return await customerRepository.getCustomer(userId);
  }

  static async createcustomer(customer: ICustomer, email: string) {
    if(!await customerRepository.getCustomerByQuery(email)){
      return await customerRepository.createCustomer(customer);
    }
  }

  static async updateCustomer(id: string, customer: ICustomer) {
    return await customerRepository.updateCustomer(id, customer);
  }
  static async deleteCustomer(customerId: string){
    return await customerRepository.deleteCustomer(customerId);
  }
}

export default customerService;
