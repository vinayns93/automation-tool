import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository, GlobalService } from '../../../core';
import { RepositoryService } from '../../../core/services/repository-service/repository.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { Table } from 'primeng/table';
import { repositoryColumns } from '../../../core/constants/repository';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  providers: [RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[];
  deletedRepositories: Repository[];
  loading: boolean = false;
  tableColumns: any[];
  columns: any;
  selectedRepositoryCols:any;
  selectedRepositoryRows: Repository[];

  @ViewChild(Table, { static: false }) dt: Table;

  constructor(private service: RepositoryService, private router: Router,
    public globalService: GlobalService) { }

  ngOnInit(): void {
    var self = this;
    self.selectedRepositoryCols = [];
    self.columns = repositoryColumns;
    self.getRepositories();
    self.LoadAllRepositoryColumns();
    self.globalService.SetCurrentTab('REPOSITORY');
  }

  LoadAllRepositoryColumns() {
    this.selectedRepositoryCols = [];
    repositoryColumns.forEach(column => {
      this.selectedRepositoryCols.push(column.value);
    });
  }

  getRepositories() {
    this.loading = true;
    this.service.getRepositories()
      .subscribe((result: Repository[]) => {
        this.repositories = [];
        if (result.length > 0) {
          result.filter(browserItem => {
            browserItem.statusID == 0 ? this.repositories.push(browserItem)
              : null;
          });
        }
        this.dt.reset();
        this.loading = false;
      },
        error => {
          console.log(error.message);
        },
        () => { })
  }

  deleteRepository(id: number) {
    if (confirm("Are you sure to delete?")) {
      this.service.deleteRepository(id);
      setTimeout(f => {
        this.getRepositories();
      }, 2200)
    }
  }

  onRowEditInit(id: number, userId: number) {
    this.router.navigate(['admin/repository/edit', id, 123]);
  }
  onRowSelect(event) {
    console.log(event);
  }

  onRowUnselect(event) {
    console.log(event);
  }
}
