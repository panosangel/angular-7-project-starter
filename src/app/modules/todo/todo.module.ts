import { NgModule } from '@angular/core';

import { TodoListComponent } from './components/todo-list/todo-list.component';
import {TodoRoutingModule} from './todo-routing.module';
import {SharedModule} from '../shared/shared.module';
import { TodoBaseComponent } from './components/todo-base/todo-base.component';
import { TodoShowElementComponent } from './components/todo-show-element/todo-show-element.component';
import { TodoAddElementComponent } from './components/todo-add-element/todo-add-element.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoBaseComponent,
    TodoShowElementComponent,
    TodoAddElementComponent,
  ],
  imports: [
    SharedModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
