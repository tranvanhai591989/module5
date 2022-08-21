import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from './customer-type.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerTypes: CustomerType[];

  constructor(private customerTypeService: CustomerTypeService) {
    this.customerTypes = this.customerTypeService.getAll();
  }

  customers: Customer[] = [
    {
      id: 1,
      name: 'Tran Van Hai',
      birthday: '1989-09-05',
      gender: 'Male',
      idCard: 205491912,
      phone: 84707498777,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: {id: 1, name: 'Gold'}
    },
    {
      id: 2,
      name: 'Tran Van',
      birthday: '1989-09-05',
      gender: 'Male',
      idCard: 305496185,
      phone: 84707498774,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: {id: 2, name: 'Silver'}
    },
    {
      id: 3,
      name: 'Tran Van',
      birthday: '1989/09/05',
      gender: 'Male',
      idCard: 485555555,
      phone: 84707498775,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: {id: 3, name: 'Silver'}
    },
  ];

  getAll() {
    return this.customers;
  }

  saveCustomer(customer: Customer) {
    this.customers.push(customer);
  }

  findById(id: number) {
    return this.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: number, customer: Customer) {
    for (const item of this.customerTypes) {
      if (customer.customerType.name === item.name) {
        customer.customerType = item;
      }
    }
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers[i] = customer;
      }
    }
  }

  deleteCustomer(id: number) {
    this.customers = this.customers.filter(customer => {
      return customer.id !== id;
    });
  }
}
