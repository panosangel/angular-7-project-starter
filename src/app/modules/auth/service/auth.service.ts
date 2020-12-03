import {Injectable} from '@angular/core';
import {of} from 'rxjs';

import {LoginAuthRequest} from '../domain/auth.model';

const credsToLogin = {
  username: 'panos',
  password: '12345'
};

@Injectable()
export class AuthService {

  constructor() {
  }

  login(request: LoginAuthRequest) {
    // Mock
    if (
      request.username === credsToLogin.username &&
      request.password === credsToLogin.password
    ) {
      return of(true);
    } else {
      return of(false);
    }
  }
}
