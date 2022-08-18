import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';

@Component({
  selector: 'app-facility-index',
  templateUrl: './facility-index.component.html',
  styleUrls: ['./facility-index.component.css']
})
export class FacilityIndexComponent implements OnInit {
  facilitys: Facility[] = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.facilitys = this.facilityService.getAll();
  }
}
