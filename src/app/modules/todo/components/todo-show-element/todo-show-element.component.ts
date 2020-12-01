import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';

import {selectCurrentElement} from '../../../../store/todo/todo.selector';
import * as todoActions from '../../../../store/todo/todo.actions';
import {AppState} from '../../../../store/state.model';
import {Todo} from '../../domain/todo.model';

@Component({
  selector: 'app-todo-show-element',
  templateUrl: './todo-show-element.component.html',
})
export class TodoShowElementComponent implements OnDestroy {
  private subscriptions = [];
  currentElement: Todo;

  constructor(
    protected store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.subscriptions.push(
      this.store.select(selectCurrentElement).subscribe(element => {
        this.currentElement = element;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.store.dispatch(new todoActions.ClearCurrentTodo());
  }

  goToList() {
    this.router.navigate(['..'], {relativeTo: this.route});
  }

}
