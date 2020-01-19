import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository.model';
import { RepositoryService } from '../services/repository.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
  providers:[RepositoryService]
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[];
  cols:any[];
  loading:boolean = true;
  constructor(private service: RepositoryService,private router:Router) { }
  ngOnInit() {
    this.loading = true;
    this.getRepositories();
    this.cols=[
      { field: 'logicalName', header: 'Logical Name' },
      { field: 'findMethod', header: 'Find Method' },
      { field: 'xpathQuery_PropertyName', header: 'XPathQuery' },
      { field: 'propertyValue', header: 'Property Value' },
      { field: 'tagName', header: 'Tag Name' },
      { field: 'featureName', header: 'Feature Name' },
      { field: 'actions', header: 'Actions' }
  ];
  }

  getRepositories(){
    this.service.getRepositories()
    .subscribe((result)=>{
      //console.log(result);
      this.repositories = result;
      this.loading=false;
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       console.log(this.repositories);
     })
  }

  deleteRepository(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteRepository(id);
       setTimeout(f=>{
         this.getRepositories();
       },2200)
    }
  }

  onRowEditInit(id:number){
    this.router.navigate(['/repository/edit', id]);
  }

}
