import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {todoReducer} from './todo/todo.reducer';
import {TodoEffects} from './todo/todo.effects';

export const RootReducerModule = StoreModule.forRoot(
  {
    todo: todoReducer,
  }
);

export const RootEffectsModule = EffectsModule.forRoot([
  TodoEffects,
]);
