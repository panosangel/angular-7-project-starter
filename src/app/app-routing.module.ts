import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ContactComponent} from './modules/shared/components/contact/contact.component';
import {AuthGuard} from './modules/auth/guards/auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: './modules/auth/auth.module#AuthModule'
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: './modules/todo/todo.module#TodoModule',
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
  ]
})
export class AppRoutingModule {
}
