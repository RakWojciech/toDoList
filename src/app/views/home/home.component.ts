import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import {trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import {Meta, Title } from "@angular/platform-browser";
import { TodoService } from "../../services/todo.service";
import { Router } from "@angular/router";
@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    private todoText: string;
    show: boolean = false;
    constructor(private todoService: TodoService, private router: Router) {
        this.todoText = "";
    }
    ngOnInit(){
    }
    private addTodo(): void {
        if(this.todoText == "clearAll()") { //hidden function
            localStorage.clear();
        }else{
            this.todoService.addTodo(this.todoText);
            this.todoText = '';
            this.show = true;
            setTimeout(() => {
                this.show = false;
            }, 3000);
        }
    }
    keyDownFunction(event) {
        if(event.keyCode == 13) {
            this.addTodo();
        }
    }
}
