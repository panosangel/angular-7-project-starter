import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from '../../../../store/state.model';
import {Store} from '@ngrx/store';

import {GetListRequest} from '../../../../store/todo/todo.actions';
import {selectTodoList} from '../../../../store/todo/todo.selector';
import {Todo} from '../../domain/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {
  private subscriptions = [];
  todos: Todo[] = [];

  constructor(
    protected store: Store<AppState>
  ) {
    this.subscriptions.push(
      store.select(selectTodoList).subscribe(todos => {
        if (todos != null) {
          this.todos = todos;
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

}
