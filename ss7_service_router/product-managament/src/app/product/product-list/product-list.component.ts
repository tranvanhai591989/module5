import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from 'src/app/model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  name: string;
  id: number;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): Product[] {
     return  this.products = this.productService.getAll();
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  delete(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getAll();
  }
}
