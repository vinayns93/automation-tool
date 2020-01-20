import { Component, OnInit } from '@angular/core';
import { Repository } from '../../../../core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositoryService } from '../../../../services/repository.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-repository',
  templateUrl: './add-repository.component.html',
  styleUrls: ['./add-repository.component.scss']
})
export class AddRepositoryComponent implements OnInit {

  repository:Repository;
  newrepositoryObj: Repository;
  repositoryForm = new FormGroup({
    logicalName:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    findMethod:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    xpathQuery_PropertyName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    propertyValue: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    tagName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    featureName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    module: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    isLocked: new FormControl(''),
});
  constructor(private route:ActivatedRoute, private service:RepositoryService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    var self = this;
    let data = new Repository();
    
    data.logicalName = this.repositoryForm.controls["logicalName"].value;
    data.findMethod = this.repositoryForm.controls["findMethod"].value;
    data.xpathQuery_PropertyName = this.repositoryForm.controls["xpathQuery_PropertyName"].value;
    data.propertyValue = this.repositoryForm.controls["propertyValue"].value;
    data.tagName = this.repositoryForm.controls["tagName"].value;
    data.featureName = this.repositoryForm.controls["featureName"].value;
    data.module = this.repositoryForm.controls["module"].value;
    data.statusID = 0;
    data.cudStatusID = 0;
    data.isLocked = this.repositoryForm.controls["isLocked"].value;
    if(data.isLocked)
      data.lockedByUser = 123;
    else
      data.lockedByUser = 0;
    data.createdOn = (new Date());
    data.updatedOn = (new Date());
    data.userId = 123;
    self.service.addRepository(data);
    setTimeout(response => {
      self.router.navigate(['/admin/repository']);
    })
  }


}
