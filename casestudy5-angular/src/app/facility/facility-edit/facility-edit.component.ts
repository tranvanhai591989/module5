import {Component, OnInit} from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityType} from '../../model/facilityType';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {FacilityRentalTypeService} from '../../service/facility/FacilityRentalType.service';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  facility: Facility;
  facilityRentalTypes: FacilityRentalType[] = [];
  facilityTypes: FacilityType[] = [];
  id: number;
  temp: string;
  facilityForm = new FormGroup({
    // id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    facilityType: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    rentalCost: new FormControl('', [Validators.required, Validators.min(30000)]),
    maxPeople: new FormControl('', [Validators.required, Validators.min(1), Validators.max(20)]),
    rentalType: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    roomStandard: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.min(15)]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.min(15)]),
    description: new FormControl('', [Validators.required]),
    freeService: new FormControl('', [Validators.required]),
  });

  constructor(private facilityRentalTypeService: FacilityRentalTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activeRouter: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
    });
  }

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(value => {
      this.facilityTypes = value;
    });
    this.facilityRentalTypeService.getAll().subscribe(value1 => {
      this.facilityRentalTypes = value1;
    });
    const id = Number(this.activeRouter.snapshot.params.id);
    this.facilityService.findById(id).subscribe(value3 => {
      this.facility = value3;
      this.temp = '' + this.facility.facilityType.id;
    }, error => {
    }, () => {
      this.facilityForm.patchValue(this.facility);
      this.facilityForm.patchValue({facilityType: this.facility.facilityType.id});
      this.facilityForm.patchValue({rentalType: this.facility.rentalType.id});
    });
  }

  submit() {
    const facilityUpdate = this.facilityForm.value;
    this.facilityTypeService.findFacilityTypeById(this.facilityForm.value.facilityType).subscribe(value => {
      facilityUpdate.facilityType = value;
    });
    this.facilityRentalTypeService.findById(this.facilityForm.value.rentalType).subscribe(value1 => {
      facilityUpdate.rentalType = value1;

      if (facilityUpdate.facilityType.id === 1) {
        facilityUpdate.roomStandard = '';
        facilityUpdate.poolArea = null;
        facilityUpdate.numberOfFloors = null;
        facilityUpdate.description = '';
        this.facilityService.updateFacility(this.id, facilityUpdate).subscribe(value => {
          this.facilityForm.reset();
          this.router.navigate(['facility']);
          this.toastr.success('Edit success', ' ', {
            timeOut: 1500, progressBar: false
          });
        });
      } else if (facilityUpdate.facilityType.id === 2) {
        facilityUpdate.poolArea = null;
        facilityUpdate.description = '';
        this.facilityService.updateFacility(this.id, facilityUpdate).subscribe(value => {
          this.facilityForm.reset();
          this.router.navigate(['facility']);
          this.toastr.success('Edit success', ' ', {
            timeOut: 1500, progressBar: false
          });
        });
      } else {
        this.facilityService.updateFacility(this.id, facilityUpdate).subscribe(value => {
          this.facilityForm.reset();
          this.router.navigate(['facility']);
          this.toastr.success('Edit success', ' ', {
            timeOut: 1500, progressBar: false
          });
        });
      }
    });
    console.log(facilityUpdate);
  }


  changeFacility(target: any) {
    this.temp = target.value;
  }
}
