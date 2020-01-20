import { Component, OnInit } from '@angular/core';
import { Repository } from '../../../../core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../../../services/repository.service';

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
    xpathQuery_PropertyName: new FormControl('', Validators.required),
    propertyValue: new FormControl('', Validators.required),
    tagName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),   
    featureName: new FormControl('', Validators.required),
    module: new FormControl('', Validators.required),
    statusID: new FormControl('', Validators.required),
    cudStatusID: new FormControl('', Validators.required),
    isLocked: new FormControl('', Validators.required)
});

  constructor(private activatedRoute: ActivatedRoute, private service: RepositoryService) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
    this.userId = activatedRoute.snapshot.paramMap.get("userId");
   }

  ngOnInit() {
    let getRepositoryreq = this.service.getRepository(this.id, this.userId)
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
}