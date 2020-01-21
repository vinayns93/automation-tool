import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';

import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { Testcontroller1EditComponent } from './pages/feature/testcontroller1/testcontroller1-edit/testcontroller1-edit.component';
import { Testcontroller2EditComponent } from './pages/feature/testcontroller2/testcontroller2-edit/testcontroller2-edit.component';
import { Testcontroller3EditComponent } from './pages/feature/testcontroller3/testcontroller3-edit/testcontroller3-edit.component';
import { AddTestScriptComponent } from './pages/test-scripts/add-test-script/add-test-script.component';
import { EditTestScriptComponent } from './pages/test-scripts/edit-test-script/edit-test-script.component';
import { TestScriptsComponent } from './pages/test-scripts/test-scripts.component';
import { TestDataComponent } from './pages/test-data/test-data.component';
import { KeywordsComponent } from './pages/keywords/keywords.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { FeatureComponent } from './pages/feature/feature.component';

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
    Testcontroller2EditComponent,
    Testcontroller3EditComponent,
    AddTestScriptComponent,
    EditTestScriptComponent
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
    TabViewModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
