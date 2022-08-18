import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  customers: Customer[] = [
    {
      id: 1,
      name: 'Tran Van Hai',
      birthday: '1989 / 09 / 05',
      gender: 'Male',
      idCard: 205491912,
      phone: 707498777,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: 'Gold'
    },
    {
      id: 2,
      name: 'Tran Van ',
      birthday: '1989 / 09 / 05',
      gender: 'Male',
      idCard: 305496185,
      phone: 707498774,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: 'Silver'
    },
    {
      id: 2,
      name: 'Tran Van ',
      birthday: '1989 / 09 / 05',
      gender: 'Male',
      idCard: 485555555,
      phone: 707498775,
      email: 'hai@gmail.com',
      address: 'Quang Nam',
      customerType: 'Silver'
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
