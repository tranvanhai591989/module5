import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginFormService} from '../service/login-form.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  }, this.checkPasswords);

  constructor(private loginService: LoginFormService) {
  }

  ngOnInit(): void {
  }

  submit() {
    const login = this.loginForm.value;
    this.loginService.saveLogin(login);
    this.loginService.reset();
  }

  checkPasswords(check: AbstractControl) {
    const password = check.value.password;
    const password1 = '123456789';
    if (password1 !== password) {
      return {checkPass: true};
    }
    return null;
  }
}
