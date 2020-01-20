import { Component, OnInit, ViewChild } from '@angular/core';
import { Repository } from '../../../core';
import { RepositoryService } from '../../../services/repository.service';
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
  cols: any[];
  loading: boolean = false;
  tableColumns: any[];
  columns: SelectItem[];

  @ViewChild(Table, {static: false}) dt: Table;
  
  constructor(private service: RepositoryService,private router:Router){ }

  ngOnInit(): void {
    var self = this;
    self.getRepositories();
    self.columns = repositoryColumns;
    self.tableColumns = [];
  }
  
  LoadRepositoryColumns(event) {
    var self = this;
    self.loading = true;
    self.tableColumns = [];
    if (event.value != undefined) {
      event.value.forEach(col => {
        self.tableColumns.push(col);
      });
    }
    self.loading = false;
  }

  getRepositories(){
    this.service.getRepositories()
    .subscribe((result: Repository[])=>{
      this.repositories = result;
        this.dt.reset();
        this.loading = false;
    },
     error =>{
       console.log(error.message);
     },
     ()=>{ })
  }

  deleteRepository(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteRepository(id);
       setTimeout(f=>{
         this.getRepositories();
       },2200)
    }
  }

  onRowEditInit(id:number,  userId: number){
    this.router.navigate(['admin/repository/edit', id, userId]);
  }
  
}
