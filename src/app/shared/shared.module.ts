import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NavbarComponent, SidebarComponent, HeaderCardComponent } from './components';

import { ChartsModule } from 'ng2-charts/ng2-charts'
import { MatSidenavModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@NgModule({
  declarations: [
    
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent,
    PageFooterComponent
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
    
    NavbarComponent,
    SidebarComponent,
    HeaderCardComponent,
    NgbModule,
    PageFooterComponent

  ]
})
export class SharedModule { }
