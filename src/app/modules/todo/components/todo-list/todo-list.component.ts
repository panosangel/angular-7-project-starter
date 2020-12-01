import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {selectTodoList} from '../../../../store/todo/todo.selector';
import {GetListRequest} from '../../../../store/todo/todo.actions';
import {Pagination} from '../../../shared/domain/pagination.model';
import {AppState} from '../../../../store/state.model';
import {Todo} from '../../domain/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  private subscriptions = [];

  todos: Todo[] = [];
  displayTodos: Todo[] = [];
  pagination: Pagination = new Pagination();

  constructor(
    protected store: Store<AppState>
  ) {
    this.subscriptions.push(
      store.select(selectTodoList).subscribe(todos => {
        if (todos != null) {
          this.todos = todos;
          this.pagination = new Pagination({totalElements: todos.length});
          this.updateDisplayList();
        }
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new GetListRequest());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  updateDisplayList() {
    const firstElement = (this.pagination.currentPage) * this.pagination.pageSize;
    const lastElement = firstElement + this.pagination.pageSize;
    this.displayTodos = this.todos.slice(firstElement, lastElement);
  }

  onPageSizeChange() {
    this.updateDisplayList();
  }
}
