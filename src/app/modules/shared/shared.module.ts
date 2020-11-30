import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    NgbModule,
    // Components
    MainMenuComponent,
  ]
})
export class SharedModule { }
