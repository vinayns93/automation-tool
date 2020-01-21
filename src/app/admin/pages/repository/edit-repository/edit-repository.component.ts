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

  editRepositoryObj: Repository;
  id: any;
  userId: any;
  repositoryForm = new FormGroup({
    id: new FormControl('', Validators.required),
    logicalName:  new FormControl('', Validators.required),
    findMethod:  new FormControl('', Validators.required),
    xpathQueryPropertyName: new FormControl('', Validators.required),
    propertyValue: new FormControl('', Validators.required),
    tagName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),   
    module: new FormControl('', Validators.required),
    statusID: new FormControl('', Validators.required),
    cudStatusID: new FormControl('', Validators.required),
    isLocked: new FormControl('', Validators.required)
});

  constructor(private activatedRoute: ActivatedRoute, private repositoryService: RepositoryService,
              private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
    this.userId = activatedRoute.snapshot.paramMap.get("userId");
   }

  ngOnInit() {
    let getRepositoryreq = this.repositoryService.getRepository(this.id, this.userId)
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
