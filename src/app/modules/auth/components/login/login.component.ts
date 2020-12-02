import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
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

  constructor(
    private store: Store<AppState>,
  ) {
  }

  onSubmit(form: NgForm) {
    const request = new LoginAuthRequest({
      username: form.value.username,
      password: form.value.password,
    });
    this.store.dispatch(new authActions.LoginRequest(request));
  }
}
