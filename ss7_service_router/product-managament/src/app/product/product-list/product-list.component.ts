import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from 'src/app/model/product';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  name: string;
  id: number;
  p = 1;
  searchForm: FormGroup;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
      this.getSearchForm();
    }, error => {
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAll();
    });
  }

  search(searchName: string) {
    this.productService.findAll(searchName).subscribe(listSearch => {
      this.products = listSearch;
    });
  }

  searchDecPrice() {
    const description = this.searchForm.value.description1;
    const price = this.searchForm.value.price1;
    this.productService.searchProductNameAndDescription(description, price).subscribe(data => {
        this.products = data;
      }, error => {
        console.log(error);
      }
    );
  }

  getSearchForm() {
    this.searchForm = new FormGroup({
      description1: new FormControl(''),
      price1: new FormControl('')
    });
  }
}
