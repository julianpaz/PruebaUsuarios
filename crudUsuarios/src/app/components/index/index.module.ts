import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { IndexComponent } from './index.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [IndexComponent, NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    IndexComponent
  ]
})
export class IndexModule { }
