import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { Testcontroller1AddComponent } from './pages/feature/testcontroller1/testcontroller1-add/testcontroller1-add.component';

export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent },
      { path: 'admin/testscripts', component: TestScriptsComponent },
      { path: 'admin/repository', component: RepositoryComponent },
      { path: 'admin/keywords', component: KeywordsComponent },
      { path: 'admin/feature', component: FeatureComponent },
      { path: 'admin/keywords/add', component: AddKeywordComponent},
      { path: 'admin/keywords/edit/:id/:userId', component: EditKeywordComponent },
      { path: 'admin/repository/add', component: AddRepositoryComponent},
      { path: 'admin/repository/edit/:id/:userId', component: EditRepositoryComponent },
      { path: 'admin/feature/testcontroller1/add', component: Testcontroller1AddComponent },
      { path: '**', redirectTo: 'admin/testscripts', pathMatch: 'full' }
];


export class AdminRoutingModule { }
