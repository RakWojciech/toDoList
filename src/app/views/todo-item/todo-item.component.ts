import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../classes/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

	@Input()
	private todo: Todo;
	done: boolean = false;

	constructor(private todoService: TodoService) { }

	ngOnInit() {
	}

	private removeTodo(): void {
		this.todoService.removeTodo(this.todo.id);
	}

	doneTodo() {
		this.done = true;
		setTimeout(() => {
			this.todoService.removeTodo(this.todo.id);
		}, 1000);
		// this.todoService.doneTodo(this.todo.id);
	}
}
