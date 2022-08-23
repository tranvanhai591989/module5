import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract/contract.service';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';

@Component({
  selector: 'app-contract-index',
  templateUrl: './contract-index.component.html',
  styleUrls: ['./contract-index.component.css']
})
export class ContractIndexComponent implements OnInit {
  contracts: Contract [] = [];
  customerList: Customer[] = [];
  facilityList: Facility [] = [];
  p = 1;

  constructor(private customerService: CustomerService,
              private contractService: ContractService,
              private facilityService: FacilityService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerList = this.customerService.getAll();
    this.contracts = this.contractService.getAll();
    this.facilityList = this.facilityService.getAll();
  }
}
