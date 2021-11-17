import { Todo } from './todo.model';

export interface TodoState {
    todoList: Todo[];
}

export const InitialState: TodoState = {
    todoList:[{
        time: "18112002",
        title: "Omae Wamu Shinderu",
        where: "VietNamese"
    }]
};