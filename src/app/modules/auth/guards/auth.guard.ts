import {CanActivate, Router} from '@angular/router';
import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';

import {selectLoggedIn} from '../../../store/auth/auth.selector';
import {AppState} from '../../../store/state.model';

@Injectable()
export class AuthGuard implements CanActivate, OnDestroy {

  isLoggedIn: boolean;
  selectLoggedIn$: Subscription;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.selectLoggedIn$ = this.store.select(selectLoggedIn).subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy() {
    this.selectLoggedIn$.unsubscribe();
  }

  canActivate() {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['auth']);
      return false;
    }
  }
}
