import {createSelector} from '@ngrx/store';

import {AppState, TodoState} from '../state.model';

export const selectTodoState = (state: AppState) => state.todo;

export const selectTodoList = createSelector(
  selectTodoState,
  (state: TodoState) => state.list
);
