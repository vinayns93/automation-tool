import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';

import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { Testcontroller3EditComponent } from '../../table-list/testcontroller3/testcontroller3-edit/testcontroller3-edit.component';
import { Testcontroller3AddComponent } from '../../table-list/testcontroller3/testcontroller3-add/testcontroller3-add.component';
import { Testcontroller1AddComponent } from '../../table-list/testcontroller1/testcontroller1-add/testcontroller1-add.component';
import { Testcontroller1EditComponent } from '../../table-list/testcontroller1/testcontroller1-edit/testcontroller1-edit.component';
import { Testcontroller2EditComponent } from '../../table-list/testcontroller2/testcontroller2-edit/testcontroller2-edit.component';
import { Testcontroller2AddComponent } from '../../table-list/testcontroller2/testcontroller2-add/testcontroller2-add.component';
import { TestscriptsEditComponent } from '../../testscripts/testscripts-edit/testscripts-edit.component';
import { TestscriptsAddComponent } from '../../testscripts/testscripts-add/testscripts-add.component';
import { TestscriptsComponent } from '../../testscripts/testscripts.component';
import { RepositoryComponent } from '../../repository/repository.component';
import { RepositoryEditComponent } from '../../repository/repository-edit/repository-edit.component';
import { RepositoryAddComponent } from '../../repository/repository-add/repository-add.component';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import {TooltipModule} from 'primeng/tooltip';
// import { ComponentsModule } from '../../components/components.module';
import { MatSidenavModule } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot(),
    TableModule,
    SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
		InputTextModule,
		TabViewModule,
    CodeHighlighterModule,
    TooltipModule,
    //ComponentsModule,
    MatSidenavModule
  ],
  declarations: [
    
    UserProfileComponent,
    TableListComponent,
    UpgradeComponent,
    TypographyComponent,
    
    MapsComponent,
    NotificationsComponent,
    Testcontroller3EditComponent,
    Testcontroller3AddComponent,
    Testcontroller1AddComponent,
    Testcontroller1EditComponent,
    Testcontroller2EditComponent,
    Testcontroller2AddComponent,
    TestscriptsComponent,
    TestscriptsEditComponent,
    TestscriptsAddComponent,
    RepositoryComponent,
    RepositoryEditComponent,
    RepositoryAddComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class AdminLayoutModule {}
