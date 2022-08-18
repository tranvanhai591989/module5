import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer/customer.service';

@Component({
  selector: 'app-customer-index',
  templateUrl: './customer-index.component.html',
  styleUrls: ['./customer-index.component.css']
})
export class CustomerIndexComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.customers = this.customerService.getAll(); }

}
