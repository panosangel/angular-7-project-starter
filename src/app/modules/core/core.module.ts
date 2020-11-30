import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import {RootEffectsModule, RootReducerModule} from '../../store/state.module';
import {environment} from '../../../environments/environment';
import {TodoService} from '../todo/service/todo.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    HttpClientModule,
    RootEffectsModule,
    RootReducerModule,
    StoreDevtoolsModule.instrument({
      maxAge: 20,
      logOnly: environment.production
    })
  ],
  providers: [
    TodoService,
  ],
})
export class CoreModule { }
