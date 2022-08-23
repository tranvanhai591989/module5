import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityTypeService} from './facility-type.service';
import {FacilityType} from '../../model/facilityType';
import {FacilityRentTypeService} from './FacilityRentType.service';
import {FacilityRentalType} from '../../model/facilityRentalType';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityTypes: FacilityType[];
  facilityRentalTypes: FacilityRentalType[];

  constructor(private facilityTypeService: FacilityTypeService,
              private facilityRentTypeService: FacilityRentTypeService) {
    this.facilityTypes = this.facilityTypeService.getAll();
    this.facilityRentalTypes = this.facilityRentTypeService.getAll();
  }

  facilityList: Facility[] = [
    {
      id: 1,
      name: 'Superior Double Or Twin Room With Garden View',
      facilityType: {id: 1, name: 'Room'},
      area: 43.5,
      rentalCost: 8000000,
      maxPeople: 8,
      rentalType: {id: 4, name: 'Year'},
      image: '../assets/image/hinh1.jpg',
      roomStandard: '1Dk',
      poolArea: 23,
      numberOfFloors: 3,
      description: 'Kem bia',
      freeService: 'Thue Xe Dap',
    }
  ];

  getAll() {
    return this.facilityList;
  }

  saveFacility(facility: Facility) {
    for (const item of this.facilityTypes) {
      if (facility.facilityType === item.name) {
        facility.facilityType = item;
      }
    }
    for (const item of this.facilityRentalTypes) {
      if (facility.rentalType === item.name) {
        facility.rentalType = item;
      }
    }
    this.facilityList.push(facility);
  }

  findById(id: number) {
    return this.facilityList.find(facility => facility.id === id);
  }

  updateFacility(id: number, facility: Facility) {
    if (facility.facilityType === 'Villa') {
      facility.freeService = '';
    } else if (facility.facilityType === 'House') {
      facility.freeService = '';
    } else if (facility.facilityType === 'Room') {
      facility.description = '';
      facility.freeService = '';
      facility.numberOfFloors = null;
      facility.poolArea = null;
    }

    for (const item of this.facilityTypes) {
      if (facility.facilityType === item.name) {
        facility.facilityType = item;
      }
    }
    for (const item of this.facilityRentalTypes) {
      if (facility.rentalType === item.name) {
        facility.rentalType = item;
      }

      for (let i = 0; i < this.facilityList.length; i++) {
        if (this.facilityList[i].id === id) {
          this.facilityList[i] = facility;
        }
      }
    }

  }

  deleteFacility(id: number) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    });
  }

}
