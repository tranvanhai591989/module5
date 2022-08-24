import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {FacilityType} from '../../model/facilityType';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityRentalTypeService} from '../../service/facility/FacilityRentalType.service';

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
  p = 1;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private facilityRentalTypeService: FacilityRentalTypeService) {
  }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityRentalTypeService.getAll().subscribe(next => {
      this.facilityRentalTypes = next;
    });
    this.facilityService.getAll().subscribe(next => {
      this.facilitys = next;
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number) {
    this.facilityService.deleteFacility(id);
    this.facilityService.getAll().subscribe(next => {
      this.facilitys = next;
    });
  }
}
