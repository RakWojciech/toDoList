import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
@Injectable()
export class TodoService {

	private todos: Todo[];
	private nextId: number;

	constructor() { 
		this.todos = [];
		this.nextId = 0;
		let storageContentKeys = Object.keys(localStorage);
		console.log(localStorage);
		let i = storageContentKeys.length;
		while (i--) {
			let todo = new Todo(i, localStorage.getItem(storageContentKeys[i]));
			this.todos.push( todo );
		}
	}
	public addTodo(text: string): void {
		let todo = new Todo(this.nextId, text);
		this.todos.push(todo);
		localStorage.setItem(this.nextId.toString(), text);
		this.nextId++;
	}
	public getTodos(): Todo[] {
		return this.todos;
	}

	public removeTodo(id: number): void {
		this.todos = this.todos.filter((todo)=> todo.id !== id);
	}

}
