import {Component, OnInit} from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityType} from '../../model/facilityType';
import {FacilityRentTypeService} from '../../service/facility/FacilityRentType.service';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
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
        id: new FormControl(facility.id, [Validators.required]),
        name: new FormControl(facility.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        facilityType: new FormControl(facility.facilityType.name, [Validators.required]),
        area: new FormControl(facility.area, [Validators.required]),
        rentalCost: new FormControl(facility.rentalCost, [Validators.required, Validators.min(30000)]),
        maxPeople: new FormControl(facility.maxPeople, [Validators.required, Validators.min(1), , Validators.max(20)]),
        rentalType: new FormControl(facility.rentalType.name, [Validators.required]),
        image: new FormControl(facility.image, [Validators.required]),
        roomStandard: new FormControl(facility.roomStandard, [Validators.required]),
        poolArea: new FormControl(facility.poolArea, [Validators.required, Validators.min(15)]),
        numberOfFloors: new FormControl(facility.numberOfFloors, [Validators.required, Validators.min(15)]),
        description: new FormControl(facility.description, [Validators.required]),
        freeService: new FormControl(facility.freeService, [Validators.required]),
      });
    });
  }

  ngOnInit(): void {
    this.facilityRentalTypes = this.facilityRentalTypeService.getAll();
    this.facilityTypes = this.facilityTypeService.getAll();
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.updateFacility(this.id, facility);
    this.facilityForm.reset();
    this.router.navigate(['facility']);
  }

  private getFacility(id: number) {
    return this.facilityService.findById(id);
  }

  changeFacility(value: any) {
    this.temp = value;

  }
}
