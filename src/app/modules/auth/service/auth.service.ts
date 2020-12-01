import {Injectable} from '@angular/core';

import {LoginAuthRequest} from '../domain/auth.model';
import {of} from 'rxjs';

const credsToLogin = {
  username: 'Panos',
  password: 't^2Yvg8!bbUPWJHq'
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
