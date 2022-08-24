import {Component, OnInit} from '@angular/core';
import {Customer} from '../../model/customer';
import {Router} from '@angular/router';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract/contract.service';
import {Facility} from '../../model/facility';

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

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.contractService.getAll().subscribe(next => {
      this.contracts = next;
    }, error => {
    });
  }
}
