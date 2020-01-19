import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing.module';
// import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

//import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { TestControllerService } from './services/testcontroller.service';
import { TestScriptsService } from './services/testscripts.service';
import { KeywordService } from './services/keyword.service';
import { RepositoryService } from './services/repository.service';
import { GlobalService } from './services/global.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import {
  MatSidenavModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { MultiSelectModule } from 'primeng/multiselect';
import { AdminComponent } from './admin';
import { SharedModule } from './shared';
import { TableModule } from 'primeng/table'
// import { AuthenticationModule } from './authentication';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AlertComponent } from './directives';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    MatSidenavModule,
    MultiSelectModule,
    SharedModule,
    TableModule,
    ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
    MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule

    // AuthenticationModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    ConfirmationDialogComponent,
    AuthenticationComponent,
    AlertComponent
  ],
  providers: [TestControllerService,
    TestScriptsService,
    KeywordService,
    RepositoryService,
    GlobalService,
    AuthenticationService,
    AlertService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
