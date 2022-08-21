import { Injectable } from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityType} from '../../model/facilityType';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[] = [
    {
      id: 1,
      name: 'Room'
    },
    {
      id: 2,
      name: 'House'
    },
    {
      id: 3,
      name: 'Villa'
    }
  ];

  getAll() {
    return this.facilityTypes;
  }
}
