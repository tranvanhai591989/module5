import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  name: string;
  id: number;

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.categoryService.getAll().subscribe(next => {
      this.categories = next;
    }, error => {
    });
  }

  openDelete(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  delete(id: number): void {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.getAll();
    });
  }
}
