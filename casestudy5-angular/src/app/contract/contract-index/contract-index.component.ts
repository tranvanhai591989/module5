import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  contractForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    customerName: new FormControl('', [Validators.required]),
    facilityName: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    deposit: new FormControl('', [Validators.required]),
  });

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

  submit() {
    const contract = this.contractForm.value;
    this.customerService.saveCustomer(contract);
    this.contractForm.reset();
    this.router.navigate(['/contract']);
  }

}
