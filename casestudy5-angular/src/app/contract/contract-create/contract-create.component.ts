import {Component, OnInit} from '@angular/core';
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
    this.customerService.getAll().subscribe(next => {
      this.customerList = next;
    });
    this.facilityService.getAll().subscribe(next => {
      this.facilityList = next;
    });
  }

  submit() {
    const contract = this.contractForm.value;
    this.contractService.saveContract(contract).subscribe(() => {
      this.contractForm.reset();
      this.router.navigate(['/contract']);
    });
  }
}
