import { ICustomer } from "../@types/CustomerType";
import prismaClient from "../database/prismaClient";

class customerRepository {
  static async getCustomers() {
    const customers = await prismaClient.customer.findMany();
    return customers;
  }

  static async getCustomer(userId: string) {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: userId,
      },
    });
    return customer;
  }

  static async createCustomer(customer: ICustomer) {
    const customerCreated = await prismaClient.customer.create({
      data: {
        ...customer,
      },
    });
    return customerCreated;
  }

  static async updateCustomer(customerId: string, customer: ICustomer) {
    const customerUpdated = await prismaClient.customer.update({
      where: { id: customerId },
      data: {
        ...customer,
      },
    });

    return customerUpdated;
  }

  static async deleteCustomer(customerId: string) {
    const customerDeleted = await prismaClient.customer.delete({
      where: { id: customerId },
    });
  }
}

export default customerRepository;
