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
import { AddTestDataComponent, EditTestDataComponent } from './pages/test-data';

export const adminRoutes: Routes = [
      { path: 'admin/testdata', component: TestDataComponent },
      { path: 'admin/testdata/add', component: AddTestDataComponent },
      { path: 'admin/testdata/edit', component: EditTestDataComponent },
      { path: 'admin/testscripts', component: TestScriptsComponent },
      { path: 'admin/testscripts/add', component: AddTestScriptComponent },
      { path: 'admin/testscripts/edit/:id', component: EditTestScriptComponent },
      { path: 'admin/repository', component: RepositoryComponent },
      { path: 'admin/keywords', component: KeywordsComponent },
      { path: 'admin/feature', component: FeatureComponent },
      { path: 'admin/keywords/add', component: AddKeywordComponent},
      { path: 'admin/keywords/edit/:id', component: EditKeywordComponent },
      { path: 'admin/repository/add', component: AddRepositoryComponent},
      { path: 'admin/repository/edit/:id/:userId', component: EditRepositoryComponent },
      { path: 'admin/feature/testcontroller1/edit/:id', component: Testcontroller1EditComponent },
      { path: 'admin/feature/testcontroller2/edit/:id', component: EditTestControllerComponent },
      { path: 'admin/feature/testcontroller3/edit/:id', component: EditBrowserControllerComponent },
      { path: 'admin/feature/modulecontroller/add', component: AddModuleControllerComponent },
      { path: 'admin/feature/testcontroller/add', component: AddTestControllerComponent },
      { path: 'admin/feature/browsercontroller/add', component: AddBrowserControllerComponent },
      { path: '**', redirectTo: 'admin/feature', pathMatch: 'full' }
];


export class AdminRoutingModule { }
