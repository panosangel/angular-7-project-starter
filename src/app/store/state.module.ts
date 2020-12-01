import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {todoReducer} from './todo/todo.reducer';
import {TodoEffects} from './todo/todo.effects';
import {authReducer} from './auth/auth.reducer';
import {AuthEffects} from './auth/auth.effects';

export const RootReducerModule = StoreModule.forRoot(
  {
    auth: authReducer,
    todo: todoReducer,
  }
);

export const RootEffectsModule = EffectsModule.forRoot([
  AuthEffects,
  TodoEffects
]);
