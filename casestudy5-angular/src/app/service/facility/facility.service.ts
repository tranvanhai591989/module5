import {Injectable} from '@angular/core';
import {Facility} from '../../model/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() {
  }

  facilitys: Facility[] = [
    {
      id: 1,
      name: 'Superior Double Or Twin Room With Garden View',
      area: 43.5,
      rentalCost: 8000000,
      maxPeople: 8,
      rentalType: 'Day',
      image: '../assets/image/hinh1.jpg'
    }
  ];

  getAll() {
    return this.facilitys;
  }

  saveCustomer(facility: Facility) {
    this.facilitys.push(facility);
  }

  findById(id: number) {
    return this.facilitys.find(facility => facility.id === id);
  }

  updateCustomer(id: number, facility: Facility) {
    for (let i = 0; i < this.facilitys.length; i++) {
      if (this.facilitys[i].id === id) {
        this.facilitys[i] = facility;
      }
    }
  }

  deleteCustomer(id: number) {
    this.facilitys = this.facilitys.filter(customer => {
      return customer.id !== id;
    });
  }
}
