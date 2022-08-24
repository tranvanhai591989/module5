import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {CustomerTypeService} from '../../service/customer/customer-type.service';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {
  customerTypes: CustomerType[] = [];

  constructor(private customerTypeService: CustomerTypeService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.customerTypeService.getAll().subscribe(next => {
      this.customerTypes = next;
    }, error => {
    });
  }
}
