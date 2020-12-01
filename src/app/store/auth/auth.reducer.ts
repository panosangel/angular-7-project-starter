import {AuthState} from '../state.model';
import * as authActions from './auth.actions';

const initialState: AuthState = {
  isLoggedIn: false,
};

export function authReducer(state = initialState, action: authActions.AuthActions) {
  switch (action.type) {
    case authActions.LOGIN_RESPONSE: {
      return {
        ...state,
        isLoggedIn: true
      };
    }
  }
  return state;
}
