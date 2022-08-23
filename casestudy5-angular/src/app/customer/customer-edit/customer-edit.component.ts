import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerTypeService} from '../../service/customer/customer-type.service';
import {CustomerType} from '../../model/customer-type';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;
  customerTypes: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private customerTypeService: CustomerTypeService,
              private toastr: ToastrService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.customerTypes = this.customerTypeService.getAll();
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id, [Validators.required]),
        name: new FormControl(customer.name, [Validators.required, Validators.pattern(/^([A-Z][^A-Z0-9\s]+)(\s[A-Z][^A-Z0-9\s]+)*$/)]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        idCard: new FormControl(customer.idCard, [Validators.required, Validators.pattern(/^[0-9]{9}$/)]),
        phone: new FormControl(customer.phone, [Validators.required, Validators.pattern(/^[\+84][0-9]{9,10}$/)]),
        email: new FormControl(customer.email, [Validators.required, Validators.email]),
        address: new FormControl(customer.address, [Validators.required]),
        customerType: new FormControl('', [Validators.required])
      });
      for (const item of this.customerTypes) {
        if (item === customer.customerType) {
          customer.customerType = item;
        }
      }
      this.customerForm.patchValue({customerType: customer.customerType});
    });
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(this.id, customer);
    this.customerForm.reset();
    this.router.navigate(['customer']);
    this.toastr.success('Edit success', ' ', {
      timeOut: 1500, progressBar: false
    });
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }
}
