import { Component, OnInit } from '@angular/core';
import { Repository } from '../../../../core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../../../core/services/repository-service/repository.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-repository',
  templateUrl: './edit-repository.component.html',
  styleUrls: ['./edit-repository.component.scss']
})
export class EditRepositoryComponent implements OnInit {

  editRepositoryObj: Repository = new Repository();
  findMethodOptions : any;
  id: any;
  repositoryForm = new FormGroup({
    id: new FormControl(''),
    logicalName:  new FormControl(''),
    findMethod:  new FormControl(''),
    xpathQueryPropertyName: new FormControl(''),
    propertyValue: new FormControl(''),
    tagName: new FormControl(''),   
    module: new FormControl('')
    
});

  constructor(private activatedRoute: ActivatedRoute, private repositoryService: RepositoryService,
              private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.findMethodOptions = [
      {label: 'EVALUATEXPATH', value: 'EVALUATEXPATH'},
      {label: 'EVALUATEID', value: 'EVALUATEID'}
    ];
    let getRepositoryreq = this.repositoryService.getRepository(this.id)
    .subscribe((result: Repository) => {
      this.editRepositoryObj = result;
      getRepositoryreq.unsubscribe()
    },
    error => {
      console.log(error);
    },
    () => {

    });
  }

  onSubmit(){
    this.repositoryService.updateRepository(this.editRepositoryObj.id, this.editRepositoryObj);
      setTimeout(f=>{
        this.router.navigate(['/admin/repository']);
      },2200)
  }
}
