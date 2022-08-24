import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {ToastrService} from 'ngx-toastr';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required])
  });
  id: number;
  customerTypes: CustomerType[];
  customer: Customer;

  constructor(private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }


  ngOnInit(): void {
    this.customerTypeService.getAll().subscribe(next => {
      this.customerTypes = next;
    });
    const id = Number(this.activeRouter.snapshot.params.id);
    this.customerService.findById(id).subscribe(value => {
        this.customer = value;
      },
      error => {
      },
      () => {
        this.customerForm.patchValue(this.customer);
        this.customerForm.patchValue({customerType: this.customer.customerType.id});
      });
  }

  submit(id: number) {
    this.customerTypeService.findById(this.customerForm.value.customerType).subscribe(value => {
      const customerUpdate = this.customerForm.value;
      customerUpdate.customerType = value;
      this.customerService.updateCustomer(id, customerUpdate).subscribe(
        value1 => {
          this.customerForm.reset();
          this.router.navigateByUrl('/customer');
          this.toastr.success('Edit success', ' ');
        },
        error => {
        },
        () => {
        }
      );
    });
  }
}
