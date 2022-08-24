import {CustomerType} from './customer-type';

export class Customer {
  id?: number;
  name?: string;
  birthday?: string;
  gender?: string;
  idCard?: number;
  phone?: number;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
