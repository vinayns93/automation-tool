import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';

import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { Testcontroller1EditComponent } from './pages/feature/module-controller/edit-module-controller/edit-module-controller.component';
import { EditTestControllerComponent } from './pages/feature/test-controller/edit-test-controller/edit-test-controller.component';
import { EditBrowserControllerComponent } from './pages/feature/browser-controller/edit-browser-controller/edit-browser-controller.component';
import { AddTestScriptComponent } from './pages/test-scripts/add-test-script/add-test-script.component';
import { EditTestScriptComponent } from './pages/test-scripts/edit-test-script/edit-test-script.component';
import { TestScriptsComponent } from './pages/test-scripts/test-scripts.component';
import { TestDataComponent } from './pages/test-data/test-data.component';
import { KeywordsComponent } from './pages/keywords/keywords.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { AddTestDataComponent } from './pages/test-data/add-test-data/add-test-data.component';
import { EditTestDataComponent } from './pages/test-data/edit-test-data/edit-test-data.component';
import { AddModuleControllerComponent } from './pages/feature/module-controller/add-module-controller/add-module-controller.component';
import { AddTestControllerComponent } from './pages/feature/test-controller/add-test-controller/add-test-controller.component';
import { AddBrowserControllerComponent } from './pages/feature/browser-controller/add-browser-controller/add-browser-controller.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    TestDataComponent,
    TestScriptsComponent,
    TestDataComponent,
    KeywordsComponent,
    RepositoryComponent,
    FeatureComponent,
    AddKeywordComponent,
    EditKeywordComponent,
    AddRepositoryComponent,
    EditRepositoryComponent,
    Testcontroller1EditComponent,
    EditTestControllerComponent,
    EditBrowserControllerComponent,
    AddTestScriptComponent,
    EditTestScriptComponent,
    AddTestDataComponent,
    EditTestDataComponent,
    AddModuleControllerComponent,
    AddTestControllerComponent,
    AddBrowserControllerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    TabViewModule,
    DropdownModule,
    MatButtonModule,
    MatIconModule,
    MenuModule,
    TooltipModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
