import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repository-edit',
  templateUrl: './repository-edit.component.html',
  styleUrls: ['./repository-edit.component.scss']
})
export class RepositoryEditComponent implements OnInit {
  id:number;
  repository:Repository;
  repositoryForm = new FormGroup({
      id: new FormControl(''),
      logicalName:  new FormControl('', Validators.required),
      findMethod:  new FormControl('', Validators.required),
      xpathQuery_PropertyName: new FormControl('', Validators.required),
      propertyValue: new FormControl('', Validators.required),
      tagName: new FormControl('', Validators.required),
      featureName: new FormControl('', Validators.required),
  });
  constructor(private route:ActivatedRoute, private service:RepositoryService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getRepositorybyId(this.id);
  }

  getRepositorybyId(num:number) {
   this.service.getRepository(num)
   .subscribe((result)=>{
    console.log(result);
    this.repository = result;
    this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.repository);
   })
  }

   populateFormFields() {
    if (this.repositoryForm) {
      this.repositoryForm.reset();
    }
    this.repositoryForm.patchValue({
      id: this.repository.id,
      logicalName:  this.repository.logicalName,
      findMethod:  this.repository.findMethod,
      xpathQuery_PropertyName: this.repository.xpathQuery_PropertyName,
      propertyValue: this.repository.propertyValue ,
      tagName: this.repository.tagName,
      featureName: this.repository.featureName,
    });
   }
  
  onSubmit() {
    let data = new Repository();
    data.id = this.repositoryForm.controls["id"].value;
    data.logicalName = this.repositoryForm.controls["logicalName"].value;
    data.findMethod = this.repositoryForm.controls["findMethod"].value;
    data.xpathQuery_PropertyName = this.repositoryForm.controls["xpathQuery_PropertyName"].value;
    data.propertyValue = this.repositoryForm.controls["propertyValue"].value;
    data.tagName = this.repositoryForm.controls["tagName"].value;
    data.featureName = this.repositoryForm.controls["featureName"].value;
    
    
    this.service.updateRepository(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/repository']);
    },2200)
  }
}
