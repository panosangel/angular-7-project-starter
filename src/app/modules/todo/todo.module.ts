import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';

@NgModule({
  declarations: [
    TodoListComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
