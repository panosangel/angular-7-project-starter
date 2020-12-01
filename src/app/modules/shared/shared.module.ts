import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PaginationComponent } from './components/pagination/pagination.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainMenuComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    // Components
    MainMenuComponent,
    PaginationComponent,
  ]
})
export class SharedModule { }
