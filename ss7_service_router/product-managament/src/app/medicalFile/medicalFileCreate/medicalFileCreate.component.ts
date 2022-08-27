import {Component, OnInit} from '@angular/core';
import {MedicalFile} from '../../model/medicalFile';
import {FormControl, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {MedicalFileService} from '../../service/medicalFile.service';

@Component({
  selector: 'app-medicalFileCreate',
  templateUrl: './medicalFileCreate.component.html',
  styleUrls: ['./medicalFileCreate.component.css']
})
export class MedicalFileCreateComponent implements OnInit {
  benhAn: MedicalFile [] = [];
  benhAnForm: FormGroup = new FormGroup({
    id: new FormControl(),
    medicalFileCode: new FormControl(),
    patientCode: new FormControl(),
    patientName: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    reason: new FormControl(),
    treatments: new FormControl(),
    doctor: new FormControl(),
  });

  constructor(private toastr: ToastrService,
              private router: Router,
              private medicalFileService: MedicalFileService) {
  }
  ngOnInit() {
  }
  submit() {
    const medicalFile = this.benhAnForm.value;
    this.medicalFileService.saveMedicalFile(medicalFile).subscribe(() => {
      this.benhAnForm.reset();
      this.router.navigateByUrl('/list');
      this.toastr.success('Create success', ' ', {
        timeOut: 1500, progressBar: false
      });
    });
  }
}
