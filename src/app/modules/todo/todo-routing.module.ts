import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import {TodoListComponent} from './components/todo-list/todo-list.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
