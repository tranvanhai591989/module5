import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ContractService} from '../../service/contract/contract.service';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
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
    this.contractService.saveContract(contract);
    this.contractForm.reset();
    this.ngOnInit();
    this.router.navigate(['/contract']);
  }
}
