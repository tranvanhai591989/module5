import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^([\+84]|[\+091]|[\+090])[0-9]{9,11}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    customerType: new FormControl('', [Validators.required]),
  });
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAll();
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.saveCustomer(customer);
    this.customerForm.reset();
    this.router.navigate(['/customer']);
    this.toastr.success('Create success', ' ', {
      timeOut: 1500, progressBar: false
    });
  }
}
