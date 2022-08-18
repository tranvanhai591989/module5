import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer/customer.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customerForm: FormGroup;
  id: number;

  constructor(private customerService: CustomerService,
              private activeRouter: ActivatedRoute,
              private router: Router) {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const customer = this.getCustomer(this.id);
      this.customerForm = new FormGroup({
        id: new FormControl(customer.id),
        name: new FormControl(customer.name),
        birthday: new FormControl(customer.birthday),
        gender: new FormControl(customer.gender),
        idCard: new FormControl(customer.idCard),
        phone: new FormControl(customer.phone),
        email: new FormControl(customer.email),
        address: new FormControl(customer.address),
        customerType: new FormControl(customer.customerType)
      });
    });
  }


  ngOnInit(): void {
  }

  submit() {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(this.id, customer);
    this.customerForm.reset();
    this.router.navigate(['customer']);
  }

  private getCustomer(id: number) {
    return this.customerService.findById(id);
  }


}
