import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { Testcontroller1AddComponent } from './pages/feature/testcontroller1/testcontroller1-add/testcontroller1-add.component';
import { Testcontroller2AddComponent } from './pages/feature/testcontroller2/testcontroller2-add/testcontroller2-add.component';
import { Testcontroller3AddComponent } from './pages/feature/testcontroller3/testcontroller3-add/testcontroller3-add.component';
import { Testcontroller1EditComponent } from './pages/feature/testcontroller1/testcontroller1-edit/testcontroller1-edit.component';
import { Testcontroller2EditComponent } from './pages/feature/testcontroller2/testcontroller2-edit/testcontroller2-edit.component';
import { Testcontroller3EditComponent } from './pages/feature/testcontroller3/testcontroller3-edit/testcontroller3-edit.component';

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
      { path: 'admin/feature/testcontroller2/add', component: Testcontroller2AddComponent },
      { path: 'admin/feature/testcontroller3/add', component: Testcontroller3AddComponent },
      { path: 'admin/feature/testcontroller1/edit/:id', component: Testcontroller1EditComponent },
      { path: 'admin/feature/testcontroller2/edit/:id', component: Testcontroller2EditComponent },
      { path: 'admin/feature/testcontroller3/edit/:id', component: Testcontroller3EditComponent },
      { path: '**', redirectTo: 'admin/testscripts', pathMatch: 'full' }
];


export class AdminRoutingModule { }
