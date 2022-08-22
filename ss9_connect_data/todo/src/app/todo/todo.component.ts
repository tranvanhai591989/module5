import {Component, OnInit} from '@angular/core';
import {Todo} from '../model/todo';
import {FormControl} from '@angular/forms';
import {TodoService} from '../service/todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(next => {
      this.todos = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  toggleTodo(i: number) {
    const todo = this.todos[i];
    const todoData = {
      ...todo,
      complete: !todo.complete
    };
    this.todoService.updateTodo(todoData).subscribe(next => {
      this.todos[i].complete = next.complete;
    });
  }

  addTodo() {
    const todo: Partial<Todo> = {
      content: this.content.value,
      complete: false
    };
    this.todoService.createTodo(todo).subscribe(next => {
      this.todos.unshift(next);
      this.content.setValue('');
    });
  }

  deleteTodo(i) {
    const todo = this.todos[i];
    this.todoService.deleteTodo(todo.id).subscribe(
      () => {
        this.todos = this.todos.filter(
          t => t.id !== todo.id
        );
      });
  }
}
