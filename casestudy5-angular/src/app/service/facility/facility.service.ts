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
    // if (facility.facilityType === 'Villa') {
    //   facility.freeService = '';
    // } else if (facility.facilityType === 'House') {
    //   facility.freeService = '';
    // } else if (facility.facilityType === 'Room') {
    //   facility.description = '';
    //   facility.freeService = '';
    //   facility.numberOfFloors = null;
    //   facility.poolArea = null;
    // }
    //
    // for (const item of this.facilityTypes) {
    //   if (facility.facilityType === item.name) {
    //     facility.facilityType = item;
    //   }
    // }
    // for (const item of this.facilityRentalTypes) {
    //   if (facility.rentalType === item.name) {
    //     facility.rentalType = item;
    //   }
    //
    //   for (let i = 0; i < this.facilityList.length; i++) {
    //     if (this.facilityList[i].id === id) {
    //       this.facilityList[i] = facility;
    //     }
    //   }
    // }

  }

  deleteFacility(id: number): Observable<Facility> {
    return this.http.delete<Facility>(this.URL_FACILITY + '/' + id);
  }

}
