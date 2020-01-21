import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { Testcontroller1EditComponent } from './pages/feature/testcontroller1/testcontroller1-edit/testcontroller1-edit.component';
import { Testcontroller2EditComponent } from './pages/feature/testcontroller2/testcontroller2-edit/testcontroller2-edit.component';
import { Testcontroller3EditComponent } from './pages/feature/testcontroller3/testcontroller3-edit/testcontroller3-edit.component';
import { AuthGuard } from '../core/guards/auth/auth.guard';

export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent, canActivate: [AuthGuard] },
      { path: 'admin/testscripts', component: TestScriptsComponent, canActivate: [AuthGuard] },
      { path: 'admin/repository', component: RepositoryComponent, canActivate: [AuthGuard] },
      { path: 'admin/keywords', component: KeywordsComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature', component: FeatureComponent, canActivate: [AuthGuard] },
      { path: 'admin/keywords/add', component: AddKeywordComponent, canActivate: [AuthGuard]},
      { path: 'admin/keywords/edit/:id', component: EditKeywordComponent, canActivate: [AuthGuard] },
      { path: 'admin/repository/add', component: AddRepositoryComponent, canActivate: [AuthGuard]},
      { path: 'admin/repository/edit/:id/:userId', component: EditRepositoryComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller1/edit/:id', component: Testcontroller1EditComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller2/edit/:id', component: Testcontroller2EditComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller3/edit/:id', component: Testcontroller3EditComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'admin/feature', pathMatch: 'full', canActivate: [AuthGuard] }
];


export class AdminRoutingModule { }
