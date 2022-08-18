import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../service/register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\[+84]+\\d{9,10}$')])
  }, this.checkPasswords);

  constructor(private registerService: RegisterService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const register = this.registerForm.value;
    this.registerService.saveRegister(register);
    this.registerForm.reset();
  }

  checkPasswords(check: AbstractControl) {
    const confirmPassword = check.value.confirmPassword;
    const password = check.value.password;
    if (confirmPassword !== password) {
      return {checkPass: true};
    }
    return null;
  }

}
