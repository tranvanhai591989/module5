import {Injectable} from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../customer/customer.service';
import {Contract} from '../../model/contract';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility/facility.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  customerList: Customer[] = [];
  contracts: Contract [] = [];
  facilityList: Facility [] = [];

  constructor(private customerService: CustomerService,
              private facilityService: FacilityService) {
    this.customerList = this.customerService.getAll();
    this.facilityList = this.facilityService.getAll();
  }

  getAll(): Contract[] {
    return this.contracts;
  }

  saveContract(contract: Contract) {
    this.contracts.push(contract);
  }

  updateContract(id: number, contract: Contract): void {
    for (const item of this.customerList) {
      if (contract.customerName === item.name) {
        contract.customerName = item;
      }
    }
    for (let i = 0; i < this.contracts.length; i++) {
      if (this.customerList[i].id === id) {
        this.contracts[i] = contract;
      }
    }
  }
}
