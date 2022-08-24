import {Injectable} from '@angular/core';
import {CustomerService} from '../customer/customer.service';
import {Contract} from '../../model/contract';
import {Facility} from '../../model/facility';
import {FacilityService} from '../facility/facility.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  // customerList: Customer[] = [];
  // contracts: Contract [] = [];
  facilityList: Facility [] = [];
  private URL_CONTRACT = 'http://localhost:3000/contracts';


  constructor(private customerService: CustomerService,
              private facilityService: FacilityService,
              private http: HttpClient) {
  }

  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(this.URL_CONTRACT);
  }

  saveContract(contract: Contract): Observable<Contract> {
    return this.http.post<Contract>(this.URL_CONTRACT, contract);
  }

  updateContract(id: number, contract: Contract): Observable<Contract> {
    return this.http.patch<Contract>(this.URL_CONTRACT + '/' + id, contract);
  }
}
