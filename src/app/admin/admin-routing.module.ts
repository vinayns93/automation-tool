import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';



export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent },
      { path: 'admin/testscripts', component: TestScriptsComponent },
      { path: 'admin/repository', component: RepositoryComponent },
      { path: 'admin/keywords', component: KeywordsComponent },
      { path: 'admin/feature', component: FeatureComponent },
      { path: '**', redirectTo: 'admin/testscripts', pathMatch: 'full' }
];


export class AdminRoutingModule { }
