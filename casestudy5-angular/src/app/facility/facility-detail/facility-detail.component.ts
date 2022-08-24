import {Component, OnInit} from '@angular/core';
import {FacilityRentalType} from '../../model/facilityRentalType';
import {FacilityType} from '../../model/facilityType';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityService} from '../../service/facility/facility.service';
import {FacilityTypeService} from '../../service/facility/facility-type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {FacilityRentalTypeService} from '../../service/facility/FacilityRentalType.service';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './facility-detail.component.html',
  styleUrls: ['./facility-detail.component.css']
})
export class FacilityDetailComponent implements OnInit {


  constructor(private facilityRentalTypeService: FacilityRentalTypeService,
              private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private activeRouter: ActivatedRoute,
              private toastr: ToastrService,
              private router: Router) {
  }

  facilityRentalTypes: FacilityRentalType[] = [];
  facilityTypes: FacilityType[] = [];
  id: number;
  temp: string;
  facilityForm: FormGroup;

  ngOnInit(): void {
    this.facilityTypeService.getAll().subscribe(next => {
      this.facilityTypes = next;
    });
    this.facilityRentalTypeService.getAll().subscribe(next => {
      this.facilityRentalTypes = next;
    });
    this.activeRouter.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = +paraMap.get('id');
      this.getFacility(this.id);
    });
  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(facility => {
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

  changeFacility(target: any) {
    this.temp = target.value;
  }

}
