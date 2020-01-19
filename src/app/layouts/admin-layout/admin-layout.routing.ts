import { Routes } from '@angular/router';


import { TableListComponent } from '../../table-list/table-list.component';
import { Testcontroller3EditComponent } from '../../table-list/testcontroller3/testcontroller3-edit/testcontroller3-edit.component';
import { Testcontroller3AddComponent } from '../../table-list/testcontroller3/testcontroller3-add/testcontroller3-add.component';
import { Testcontroller2EditComponent } from '../../table-list/testcontroller2/testcontroller2-edit/testcontroller2-edit.component';
import { Testcontroller2AddComponent } from '../../table-list/testcontroller2/testcontroller2-add/testcontroller2-add.component';
import { Testcontroller1EditComponent } from '../../table-list/testcontroller1/testcontroller1-edit/testcontroller1-edit.component';
import { Testcontroller1AddComponent } from '../../table-list/testcontroller1/testcontroller1-add/testcontroller1-add.component';
import { TestscriptsComponent } from '../../testscripts/testscripts.component';
import { TestscriptsEditComponent } from '../../testscripts/testscripts-edit/testscripts-edit.component';
import { TestscriptsAddComponent } from '../../testscripts/testscripts-add/testscripts-add.component';
import { RepositoryComponent } from '../../repository/repository.component';
import { RepositoryEditComponent } from '../../repository/repository-edit/repository-edit.component';
import { RepositoryAddComponent } from '../../repository/repository-add/repository-add.component';
import { KeywordsComponent } from '../../keywords/keywords.component';
import { KeywordsEditComponent } from '../../keywords/keywords-edit/keywords-edit.component';
import { KeywordsAddComponent } from '../../keywords/keywords-add/keywords-add.component';


export const AdminLayoutRoutes: Routes = [
    
    { path: 'table-list',     component: TableListComponent },
    { path: 'table-list/testcontroller3/edit/:id', component: Testcontroller3EditComponent},
    { path: 'table-list/testcontroller3/add', component: Testcontroller3AddComponent},
    { path: 'table-list/testcontroller2/edit/:id', component: Testcontroller2EditComponent},
    { path: 'table-list/testcontroller2/add', component: Testcontroller2AddComponent},
    { path: 'table-list/testcontroller1/edit/:id', component: Testcontroller1EditComponent},
    { path: 'table-list/testcontroller1/add', component: Testcontroller1AddComponent},
    { path: 'testscripts',     component: TestscriptsComponent },
    { path: 'testscripts/edit/:id', component: TestscriptsEditComponent},
    { path: 'testscripts/add', component: TestscriptsAddComponent},
    { path: 'keywords',     component: KeywordsComponent },
    { path: 'keywords/edit/:id', component: KeywordsEditComponent},
    { path: 'keywords/add', component: KeywordsAddComponent},
    { path: 'repository',     component: RepositoryComponent },
    { path: 'repository/edit/:id', component: RepositoryEditComponent},
    { path: 'repository/add', component: RepositoryAddComponent}
];
