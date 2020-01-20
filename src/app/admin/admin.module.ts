import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { adminRoutes } from './admin-routing.module';
import { SharedModule } from '../shared';
import { TestScriptsComponent } from './pages/test-scripts/test-scripts.component';
import { TestDataComponent } from './pages/test-data/test-data.component';
import { KeywordsComponent } from './pages/keywords/keywords.component';
import { RepositoryComponent } from './pages/repository/repository.component';
import { FeatureComponent } from './pages/feature/feature.component';
import { RouterModule, Routes } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { KeywordsAddComponent } from '../keywords/keywords-add/keywords-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { KeywordsEditComponent } from '../keywords/keywords-edit/keywords-edit.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { Testcontroller1AddComponent } from './pages/feature/testcontroller1/testcontroller1-add/testcontroller1-add.component';

const routes: Routes = [
  { path: 'admin/testdata', component: TestDataComponent },
  { path: 'admin/testscripts', component: TestScriptsComponent },
  { path: 'admin/repository', component: RepositoryComponent },
  { path: 'admin/keywords', component: KeywordsComponent },
  { path: 'admin/feature', component: FeatureComponent },
  { path: 'admin/keywords/add', component: KeywordsAddComponent },
  { path: 'admin/keywords/edit/:id/:userId', component: EditKeywordComponent },
  { path: 'admin/feature/testcontroller1/add', component: Testcontroller1AddComponent },
  { path: '**', redirectTo: 'admin/repository', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    TestDataComponent, 
    TestScriptsComponent, 
    TestDataComponent, 
    KeywordsComponent, 
    RepositoryComponent, 
    FeatureComponent, AddKeywordComponent, 
    EditKeywordComponent, AddRepositoryComponent, 
    EditRepositoryComponent,
    Testcontroller1AddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    MultiSelectModule,
    TableModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
