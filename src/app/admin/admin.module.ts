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


const routes: Routes = [
  { path: 'admin/testdata', component: TestDataComponent },
  { path: 'admin/testscripts', component: TestScriptsComponent },
  { path: 'admin/repository', component: RepositoryComponent },
  { path: 'admin/keywords', component: KeywordsComponent },
  { path: 'admin/feature', component: FeatureComponent },
  { path: '**', redirectTo: 'admin/repository', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    TestDataComponent, 
    TestScriptsComponent, 
    TestDataComponent, 
    KeywordsComponent, 
    RepositoryComponent, 
    FeatureComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(adminRoutes),
    MultiSelectModule,
    TableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
