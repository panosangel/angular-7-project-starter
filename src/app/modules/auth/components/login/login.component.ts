import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as authActions from '../../../../store/auth/auth.actions';
import {LoginAuthRequest} from '../../domain/auth.model';
import {AppState} from '../../../../store/state.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  request: LoginAuthRequest = new LoginAuthRequest();

  constructor(
    private store: Store<AppState>,
  ) {
  }

  login() {
    this.store.dispatch(new authActions.LoginRequest(this.request));
  }
}
