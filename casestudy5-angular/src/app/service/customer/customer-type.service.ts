import {Injectable} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  private URL_CUSTOMERTYPE = 'http://localhost:3000/customerType';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>(this.URL_CUSTOMERTYPE);
  }
  findById(id: number): Observable<CustomerType> {
    return this.http.get<CustomerType>(this.URL_CUSTOMERTYPE + '/' + id);
  }
}
