import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {FacilityRentTypeService} from '../../service/facility/FacilityRentType.service';
import {FacilityType} from '../../model/facilityType';
import {FacilityRentalType} from '../../model/facilityRentalType';

@Component({
  selector: 'app-facility-index',
  templateUrl: './facility-index.component.html',
  styleUrls: ['./facility-index.component.css']
})
export class FacilityIndexComponent implements OnInit {
  facilitys: Facility[] = [];
  facilityTypes: FacilityType[] = [];
  facilityRentalTypes: FacilityRentalType[] = [];
  id: number;
  name: string;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private facilityRentalService: FacilityRentTypeService) {
  }

  ngOnInit(): void {
    this.facilitys = this.facilityService.getAll();
    this.facilityTypes = this.facilityTypeService.getAll();
    this.facilityRentalTypes = this.facilityRentalService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id);
    this.facilitys = this.facilityService.getAll();
  }
}
