import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
