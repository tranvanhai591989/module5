import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categores: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(next => {
      this.categores = next;
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
      alert(' Create success');
      this.router.navigateByUrl('/product/list');
    });
  }
}
