import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer/customer.service';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {ServerHttpService} from '../../service/service-http.service';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {
  customers: Customer[] = [];
  customerTypes: CustomerType[] = [];
  id: number;
  name: string;
  p = 1;

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private serverHttp: ServerHttpService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAll();
    this.customerTypes = this.customerTypeService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.customerService.deleteCustomer(id);
    this.customers = this.customerService.getAll();
  }
}
