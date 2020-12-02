import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {selectTodoList} from '../../../../store/todo/todo.selector';
import * as todoActions from '../../../../store/todo/todo.actions';
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
    protected store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.subscriptions.push(
      store.select(selectTodoList).subscribe(todos => {
        if (todos != null) {
          this.todos = todos;
          this.pagination = new Pagination({...this.pagination, totalElements: todos.length});
          this.displayTodos = this.updateDisplayList(this.pagination);
        }
      })
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  updateDisplayList(pagination: Pagination) {
    const firstElement = (pagination.currentPage) * pagination.pageSize;
    const lastElement = firstElement + pagination.pageSize;
    return this.todos.slice(firstElement, lastElement);
  }

  onPageSizeChange($size) {
    this.pagination = new Pagination({
        ...this.pagination,
        currentPage: 0,
        pageSize: parseInt($size, 10)
      }
    );
    this.displayTodos = this.updateDisplayList(this.pagination);
  }

  onPageChange(page: number) {
    const pageSize = this.pagination.pageSize;
    const currentPage = Number(page);
    this.pagination = new Pagination(
      {
        ...this.pagination,
        pageSize,
        currentPage,
      }
    );
    this.displayTodos = this.updateDisplayList(this.pagination);
  }

  showElement(elementId: number) {
    this.router.navigate([elementId], {relativeTo: this.route});
  }

  editElement(elementId: number) {
    this.router.navigate([elementId, 'edit'], {relativeTo: this.route});
  }

  deleteElement(elementId: number) {
    this.store.dispatch(new todoActions.DeleteTodoRequest(elementId));
  }

}
