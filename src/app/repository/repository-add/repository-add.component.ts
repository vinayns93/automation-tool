import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../../models/repository.model';
import { RepositoryService } from '../../services/repository.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-repository-add',
  templateUrl: './repository-add.component.html',
  styleUrls: ['./repository-add.component.scss']
})
export class RepositoryAddComponent implements OnInit {
  repository:Repository;
  repositoryForm = new FormGroup({
      id: new FormControl('',Validators.required),
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
    
    
    this.service.addRepository(data);
    setTimeout(f=>{
      this.router.navigate(['/repository']);
    },2200)
  }

}
