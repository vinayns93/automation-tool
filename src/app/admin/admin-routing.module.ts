import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestDataComponent, TestScriptsComponent, RepositoryComponent, KeywordsComponent, FeatureComponent } from './pages';
import { AddKeywordComponent } from './pages/keywords/add-keyword/add-keyword.component';
import { EditKeywordComponent } from './pages/keywords/edit-keyword/edit-keyword.component';
import { EditRepositoryComponent } from './pages/repository/edit-repository/edit-repository.component';
import { AddRepositoryComponent } from './pages/repository/add-repository/add-repository.component';
import { Testcontroller1EditComponent } from './pages/feature/module-controller/edit-module-controller/edit-module-controller.component';
import { EditTestControllerComponent } from './pages/feature/test-controller/edit-test-controller/edit-test-controller.component';
import { EditBrowserControllerComponent } from './pages/feature/browser-controller/edit-browser-controller/edit-browser-controller.component';
import { AuthGuard } from '../core/guards/auth/auth.guard';
import { AddTestScriptComponent } from './pages/test-scripts/add-test-script/add-test-script.component';
import { EditTestScriptComponent } from './pages/test-scripts/edit-test-script/edit-test-script.component';
import { AddModuleControllerComponent } from './pages/feature/module-controller/add-module-controller/add-module-controller.component';
import { AddTestControllerComponent } from './pages/feature/test-controller/add-test-controller/add-test-controller.component';
import { AddBrowserControllerComponent } from './pages/feature/browser-controller/add-browser-controller/add-browser-controller.component';

export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent, canActivate: [AuthGuard] },
      { path: 'admin/testscripts', component: TestScriptsComponent, canActivate: [AuthGuard] },
      { path: 'admin/testscripts/add', component: AddTestScriptComponent, canActivate: [AuthGuard] },
      { path: 'admin/testscripts/edit/:id', component: EditTestScriptComponent, canActivate: [AuthGuard] },
      { path: 'admin/repository', component: RepositoryComponent, canActivate: [AuthGuard] },
      { path: 'admin/keywords', component: KeywordsComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature', component: FeatureComponent, canActivate: [AuthGuard] },
      { path: 'admin/keywords/add', component: AddKeywordComponent, canActivate: [AuthGuard]},
      { path: 'admin/keywords/edit/:id', component: EditKeywordComponent, canActivate: [AuthGuard] },
      { path: 'admin/repository/add', component: AddRepositoryComponent, canActivate: [AuthGuard]},
      { path: 'admin/repository/edit/:id/:userId', component: EditRepositoryComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller1/edit/:id', component: Testcontroller1EditComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller2/edit/:id', component: EditTestControllerComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller3/edit/:id', component: EditBrowserControllerComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/modulecontroller/add', component: AddModuleControllerComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/testcontroller/add', component: AddTestControllerComponent, canActivate: [AuthGuard] },
      { path: 'admin/feature/browsercontroller/add', component: AddBrowserControllerComponent, canActivate: [AuthGuard] },
      { path: '**', redirectTo: 'admin/feature', pathMatch: 'full', canActivate: [AuthGuard] }
];


export class AdminRoutingModule { }
