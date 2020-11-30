import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoBaseComponent} from './components/todo-base/todo-base.component';

const routes: Routes = [
  {
    path: '',
    component: TodoBaseComponent,
    children: [
      {path: '', component: TodoListComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {
}
