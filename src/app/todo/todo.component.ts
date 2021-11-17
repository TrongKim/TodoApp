import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { formatDate } from "@angular/common";
import { Observable } from 'rxjs';
import { TodoState } from './todo.state';
import { Store } from '@ngrx/store';

import { Todo, CTodo } from './todo.model';

import { getTodo, createTodo } from './actions/todo.action';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] = [];
  todoItem: Todo;
  todoList$: Observable<Todo[]>

  //form Validate inputs
  setForm: FormGroup;
  FormModel: CTodo;
  FormFields: Array<FormlyFieldConfig>
  anothertodo: any

  constructor(private store: Store<TodoState>) {
    this.setForm = new FormGroup({});
    this.FormModel = new CTodo();
    this.FormFields = this.FormModel.formField();
  }

  ngOnInit(): void {
    this.store.dispatch(getTodo());
    this.store.select(state => state.todoList).subscribe((data) => this.anothertodo = data)
    this.todos = this.anothertodo['todoList'];
    this.store.subscribe(res => this.todos = res['todoList']['todoList']); 
  }

  onSubmit(){
    this.todoItem = {
      time: formatDate(this.FormModel['time'], 'dd-MM-yyyy', 'en-US'),
      title: this.FormModel['title'],
      where: this.FormModel['where']
    }

    const todo: Todo = this.todoItem;
    
    this.store.dispatch(createTodo({ todo }));
  }

}
