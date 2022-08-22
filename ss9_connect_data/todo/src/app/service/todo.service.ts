import {Injectable} from '@angular/core';
import {Todo} from '../model/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly  URL = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {
  }

  getTodos(count = 10): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.URL).pipe(
      map(data => data.filter((todo, i) => i < count)));
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.patch<Todo>(`${this.URL}/${todo.id}`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.URL, todo);
  }
}
