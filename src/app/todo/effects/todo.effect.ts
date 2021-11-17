import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodoService } from './../services/todo.service';
import { mergeMap, map } from 'rxjs/operators';
import { getTodo, getTodoSuccess, createTodo, createTodoSuccess } from './../actions/todo.action';

@Injectable()
export class TodoEffects {
    constructor(private actions$: Actions, private todoService: TodoService) {}

    loadTodoList$ = createEffect(() => {
        return this.actions$.pipe(ofType(getTodo), mergeMap((action) => {
            return this.todoService.getTodoList().pipe(
                map((todoList) => {
                    return getTodoSuccess({todoList: todoList});
                })
            )
        }))
    }, { dispatch: true })

    addTodo$ = createEffect(() => {
        return this.actions$.pipe(ofType(createTodo), mergeMap(action => {
            console.log(action.todo);
            return this.todoService.createTodo(action.todo).pipe(map((data) => {
                const todo = { ...action.todo }
                return createTodoSuccess({ todo: todo })
            }))
        }))
    }, {dispatch: true})
}