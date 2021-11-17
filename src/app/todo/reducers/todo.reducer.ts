import { createReducer, on } from '@ngrx/store';

import { InitialState } from './../todo.state';

import { getTodoSuccess, getTodo, createTodoSuccess } from './../actions/todo.action';

const _todoReducer = createReducer(
    InitialState,
    on(getTodoSuccess, (state, action) => {
        return {
            ...state,
            todoList: action.todoList
        }
    }),
    on(getTodo, (state) => {
        return {...state}
    }),
    on(createTodoSuccess, (state, action) => { 
        let todo = { ...action.todo }
        return {...state, 
            todoList: [...state.todoList, todo],
        };
    })
)

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}