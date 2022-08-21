import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityRentTypeService} from '../../service/facility/FacilityRentType.service';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {FacilityType} from '../../model/facilityType';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(15), Validators.max(300)]),
    rentalCost: new FormControl('', [Validators.required, Validators.min(0)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1), , Validators.max(20)]),
    rentalType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    roomStandard: new FormControl(''),
    poolArea: new FormControl('', [Validators.min(15)]),
    numberOfFloors: new FormControl('', [Validators.min(1)]),
    description: new FormControl(''),
    freeService: new FormControl(''),
  });
  facilityRentalTypes: FacilityRentalType[] = [];
  facilityTypes: FacilityType[] = [];
  temp: string;

  constructor(private facilityRentalTypeService: FacilityRentTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityRentalTypes = this.facilityRentalTypeService.getAll();
    this.facilityTypes = this.facilityTypeService.getAll();
    console.log(this.facilityTypes);
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility);
    this.facilityForm.reset();
    this.router.navigate(['/facility']);
  }

  changeFacility(value: any) {
    this.temp = value;
  }
}
