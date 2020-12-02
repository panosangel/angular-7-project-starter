import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

import {selectCurrentElement} from '../../../../store/todo/todo.selector';
import * as todoActions from '../../../../store/todo/todo.actions';
import {AppState} from '../../../../store/state.model';
import {Todo} from '../../domain/todo.model';

@Component({
  selector: 'app-todo-edit-element',
  templateUrl: './todo-edit-element.component.html',
})
export class TodoEditElementComponent implements OnDestroy {
  private currentElement$: Subscription;
  @ViewChild('f') form: NgForm;
  showModal = false;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.currentElement$ = store.select(selectCurrentElement).subscribe(element => {
      this.updateTemplate(element);
    });
  }

  ngOnDestroy() {
    this.currentElement$.unsubscribe();
    this.store.dispatch(new todoActions.ClearCurrentTodo());
  }

  updateTemplate(element: Todo) {
    if (element) {
      this.form.setValue(element);
    }
  }

  onSubmit(form: NgForm) {
    const req = new Todo({
      id: form.value.id,
      userId: form.value.userId,
      title: form.value.title,
      completed: form.value.completed,
    });
    this.store.dispatch(new todoActions.EditTodoRequest(req));
    this.form.control.markAsPristine();
  }

  modalIsClosed() {
    this.showModal = false;
  }

  goToList() {
    if (!this.form.dirty) {
      this.router.navigate(['home']);
    } else {
      this.showModal = true;
    }
  }
}
