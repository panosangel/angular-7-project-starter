import {createSelector} from '@ngrx/store';

import {AppState, AuthState} from '../state.model';

export const selectAuthState = (state: AppState) => state.auth;

export const selectLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) => state.isLoggedIn
);
