import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import {TodoRoutingModule} from './todo-routing.module';

@NgModule({
  declarations: [
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
