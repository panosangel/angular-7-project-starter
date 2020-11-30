import {TodoState} from '../state.model';
import * as todoActions from './todo.actions';

const initialState: TodoState = {
  list: [],
};

export function todoReducer(state = initialState, action: todoActions.TodoActions) {
  switch (action.type) {
    case todoActions.GET_LIST_RESPONSE: {
      return {
        ...state,
        list: action.todos
      };
    }
  }
  return state;
}
