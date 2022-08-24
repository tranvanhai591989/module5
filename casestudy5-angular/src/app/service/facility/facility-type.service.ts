import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacilityType} from '../../model/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private URL_FACILITYTYPE = 'http://localhost:3000/facilityType';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(this.URL_FACILITYTYPE);
  }

  findFacilityTypeById(id: number): Observable<FacilityType> {
    return this.http.get<FacilityType>(this.URL_FACILITYTYPE + '/' + id);

  }
}
