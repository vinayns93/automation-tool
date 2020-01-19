import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavbarComponent, SidebarComponent, HeaderCardComponent } from './components';

import { ChartsModule } from 'ng2-charts/ng2-charts'
import { MatSidenavModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    NgbModule,
    RouterModule,
    ChartsModule,
    TableModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent,
    NgbModule
  ]
})
export class SharedModule { }
