import {Injectable} from '@angular/core';
import {Category} from '../model/category';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private URL_CATEGORY = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.URL_CATEGORY);
  }

  saveCategory(category): Observable<Category> {
    return this.http.post<Category>(this.URL_CATEGORY, category);
  }

  findById(id: number): Observable<Category> {
    return this.http.get<Category>(this.URL_CATEGORY + '/' + id);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.patch<Category>(this.URL_CATEGORY + '/' + id, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(this.URL_CATEGORY + '/' + id);
  }
}
