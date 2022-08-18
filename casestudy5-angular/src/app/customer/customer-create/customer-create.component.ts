import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{6,9}$/)]),
    phone: new FormControl('', [Validators.required,  Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
    email: new FormControl('', [Validators.required ,  Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    console.log(customer);
    this.customerForm.reset();
    this.router.navigate(['customer']);
  }

}
