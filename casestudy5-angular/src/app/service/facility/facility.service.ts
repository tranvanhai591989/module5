import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_FACILITY = 'http://localhost:3000/facilities';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_FACILITY);
  }

  saveFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.URL_FACILITY, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(this.URL_FACILITY + '/' + id);
  }

  updateFacility(id: number, facility: Facility): Observable<Facility> {
    return this.http.patch<Facility>(this.URL_FACILITY + '/' + id, facility);
  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(this.URL_FACILITY + '/' + id);
  }

}
