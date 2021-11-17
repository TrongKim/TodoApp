import { HttpClient } from '@angular/common/http';
import { Todo } from './../todo.model';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService{
    constructor(private http: HttpClient){}

    getTodoList():Observable<Todo[]> {
        return this.http.get('http://localhost:8000/todo').pipe(map((data) => {
            const todoList: Todo[] = [];
            for(let key in data){
                todoList.push({...data[key], id:key});
            }
            return todoList;
        }))
    }

    createTodo(todo: Todo) {
        return this.http.post('http://localhost:8000/todo/create', todo);
    }
}