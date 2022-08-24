import {Injectable} from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityRentalTypeService {
  private URL_CATEGORY = 'http://localhost:3000/rentalType';

  constructor(private http: HttpClient) {
  }
  getAll(): Observable<FacilityRentalType[]> {
    return this.http.get<FacilityRentalType[]>(this.URL_CATEGORY);
  }
}
