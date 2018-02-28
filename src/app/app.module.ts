import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {AppRoutingModule, navigatableComponents} from './app.routes';
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy} from "@angular/common";

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TodoService } from './services/todo.service';
import { TodoItemComponent } from './views/todo-item/todo-item.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ...navigatableComponents,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
