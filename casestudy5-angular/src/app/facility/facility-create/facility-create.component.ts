import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityService} from '../../service/facility/facility.service';
import {Router} from '@angular/router';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {FacilityType} from '../../model/facilityType';
import {ToastrService} from 'ngx-toastr';
import {FacilityRentalTypeService} from '../../service/facility/FacilityRentalType.service';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  facilityRentalTypes: FacilityRentalType[] = [];
  facilityTypes: FacilityType[] = [];
  temp: string;

  facilityForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(15), Validators.max(300)]),
    rentalCost: new FormControl('', [Validators.required, Validators.min(0)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1), , Validators.max(20)]),
    rentalType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    roomStandard: new FormControl(' ', [Validators.required]),
    poolArea: new FormControl(null, [Validators.min(15)]),
    numberOfFloors: new FormControl(null, [Validators.min(1)]),
    description: new FormControl(' ', [Validators.required]),
    freeService: new FormControl(' ', [Validators.required]),
  });

  constructor(private facilityRentalTypeService: FacilityRentalTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityRentalTypeService.getAll().subscribe(next => {
      this.facilityRentalTypes = next;
    });
  }

  submit() {
    const facility = this.facilityForm.value;
    this.facilityTypeService.findFacilityTypeById(this.facilityForm.value.facilityType).subscribe(value => {
      facility.facilityType = value;
      this.facilityService.saveFacility(facility).subscribe(() => {
        this.facilityForm.reset();
        this.router.navigate(['/facility']);
        this.toastr.success('Create success', ' ', {
          timeOut: 1500, progressBar: false
        });
      });
    });
  }

  changeFacility(target: any) {
    this.temp = target.value;
  }
}
