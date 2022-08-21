import { Injectable } from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';

@Injectable({
  providedIn: 'root'
})
export class FacilityRentTypeService {

  constructor() { }
  rentalType: FacilityRentalType[] = [
    {
      id: 1,
      name: 'Day'
    },
    {
      id: 2,
      name: 'Week'
    },
    {
      id: 3,
      name: 'Month'
    },
    {
      id: 4,
      name: 'Year'
    }
  ];

  getAll() {
    return this.rentalType;
  }
}
