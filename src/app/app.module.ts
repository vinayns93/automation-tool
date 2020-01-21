import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TestControllerService } from './core/services/feature-service/testcontroller.service';
import { TestScriptsService } from './core/services/test-scripts/testscripts.service';
import { KeywordService } from './core/services/keywords-service/keyword.service';
import { RepositoryService } from './core/services/repository-service/repository.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import {
  MatSidenavModule, MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';
import { MultiSelectModule } from 'primeng/multiselect';
import { AdminComponent } from './admin';
import { SharedModule } from './shared';
import { TableModule } from 'primeng/table'
import { AuthenticationComponent } from './authentication/authentication.component';
import { AlertComponent } from './directives';
import { AlertService } from './core/services/shared/alert.service';
import { AuthenticationService } from './core/services/auth/authentication.service';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog/confirmation-dialog.service';
import { GlobalService } from './core';
import { FeatureService } from './core/services/feature-service/feature-service.service';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    MatSidenavModule,
    MultiSelectModule,
    SharedModule,
    TableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    ConfirmationDialogComponent,
    AuthenticationComponent,
    AlertComponent,
    NotificationsComponent
  ],
  providers: [TestControllerService,
    TestScriptsService,
    KeywordService,
    RepositoryService,
    GlobalService,
    AuthenticationService,
    AlertService,
    ConfirmationDialogService,
    FeatureService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationDialogComponent]
})
export class AppModule { }
