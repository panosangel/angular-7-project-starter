export class LoginAuthRequest {
  username: string;
  password: string;

  constructor(props = {}) {
    Object.assign(this, props);
  }
}
