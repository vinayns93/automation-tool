import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';



export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent },
      { path: 'admin/testscripts', component: TestScriptsComponent },
      { path: 'admin/repository', component: RepositoryComponent },
      { path: 'admin/keywords', component: KeywordsComponent },
      { path: 'admin/feature', component: FeatureComponent },
      { path: 'admin/keywords/add', component: AddKeywordComponent},
      { path: 'admin/keywords/edit/:id/:userId', component: EditKeywordComponent },
      { path: '**', redirectTo: 'admin/testscripts', pathMatch: 'full' }
];


export class AdminRoutingModule { }
