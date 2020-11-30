import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import {TodoRoutingModule} from './todo-routing.module';
import {SharedModule} from '../shared/shared.module';
import { TodoBaseComponent } from './components/todo-base/todo-base.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoBaseComponent,
  ],
  imports: [
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
