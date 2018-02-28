import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import {trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {Meta, Title } from "@angular/platform-browser";
import { TodoService } from "../../services/todo.service";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private todoText: string;
    constructor(private todoService: TodoService) {
        this.todoText = "";
    }
    ngOnInit(){
    }
    private addTodo(): void {
        this.todoService.addTodo(this.todoText);
        this.todoText = '';
    }
}
