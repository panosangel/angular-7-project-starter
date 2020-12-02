import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {PaginationComponent} from './components/pagination/pagination.component';
import {MainMenuComponent} from './components/main-menu/main-menu.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    MainMenuComponent,
    PaginationComponent,
    ContactComponent,
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
export class SharedModule {
}
