import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TodoShowElementComponent} from './components/todo-show-element/todo-show-element.component';
import {TodoAddElementComponent} from './components/todo-add-element/todo-add-element.component';
import {TodoBaseComponent} from './components/todo-base/todo-base.component';
import {TodoListComponent} from './components/todo-list/todo-list.component';
import {TodoElementResolver} from './resolver/todo-element.resolver';
import {TodoListResolver} from './resolver/todo-list.resolver';
import {TodoEditElementComponent} from './components/todo-edit-element/todo-edit-element.component';

const routes: Routes = [
  {
    path: '',
    component: TodoBaseComponent,
    resolve: {todoList: TodoListResolver},
    children: [
      {path: '', component: TodoListComponent},
      {path: 'add', component: TodoAddElementComponent},
      {path: ':id/edit', component: TodoEditElementComponent, resolve: {todoElement: TodoElementResolver}},
      {path: ':id', component: TodoShowElementComponent, resolve: {todoElement: TodoElementResolver}},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [TodoElementResolver, TodoListResolver]
})
export class TodoRoutingModule {
}
