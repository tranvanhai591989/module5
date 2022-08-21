import {Component, OnInit} from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityType} from '../../model/facilityType';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityRentTypeService} from '../../service/facility/FacilityRentType.service';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {

  facilityRentalTypes: FacilityRentalType[] = [];
  facilityTypes: FacilityType[] = [];
  id: number;
  temp: string;
  facilityForm: FormGroup;

  constructor(private facilityRentalTypeService: FacilityRentTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const facility = this.getFacility(this.id);
      this.facilityForm = new FormGroup({
        id: new FormControl(facility.id),
        name: new FormControl(facility.name),
        facilityType: new FormControl(facility.facilityType.name),
        area: new FormControl(facility.area),
        rentalCost: new FormControl(facility.rentalCost),
        maxPeople: new FormControl(facility.maxPeople),
        rentalType: new FormControl(facility.rentalType.name),
        image: new FormControl(facility.image),
        roomStandard: new FormControl(facility.roomStandard),
        poolArea: new FormControl(facility.poolArea),
        numberOfFloors: new FormControl(facility.numberOfFloors),
        description: new FormControl(facility.description),
        freeService: new FormControl(facility.freeService),
      });
    });
  }

  ngOnInit(): void {
    this.facilityTypes = this.facilityTypeService.getAll();
    this.facilityRentalTypes = this.facilityRentalTypeService.getAll();
  }
  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }
}
