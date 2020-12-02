import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import {AppState} from '../../../../store/state.model';
import {Todo} from '../../domain/todo.model';
import * as todoActions from '../../../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-add-element',
  templateUrl: './todo-add-element.component.html',
  styleUrls: ['./todo-add-element.component.css']
})
export class TodoAddElementComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const req = new Todo({
      id: form.value.id,
      userId: form.value.userId,
      title: form.value.title,
      checked: form.value.checked,
    });
    this.store.dispatch(new todoActions.AddTodoRequest(req));
  }

}
