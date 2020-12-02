import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ]
})
export class AuthModule {
}
