import { Todo } from './../todo.model';
import { createAction, props } from '@ngrx/store';


export const GET_TODO = '[Todo Component] GET';
export const GET_TODO_SUCCESS = '[Todo Component] GET SUCCESS';

export const CREATE_TODO = '[Todo Component] CREATE';
export const CREATE_TODO_SUCCESS = '[Todo Component] CREATE SUCCESS';

export const UPDATE_TODO = '[Todo Component] UPDATE';
export const DELETE_TODO = '[Todo Component] DELETE';

export const getTodo = createAction(GET_TODO);
export const getTodoSuccess = createAction(GET_TODO_SUCCESS, props<{todoList: Todo[]}>());
export const createTodo = createAction(CREATE_TODO, props<{todo: Todo}>());
export const createTodoSuccess = createAction(CREATE_TODO_SUCCESS, props<{todo: Todo}>());

