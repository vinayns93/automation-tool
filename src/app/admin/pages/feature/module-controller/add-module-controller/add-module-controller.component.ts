import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModuleController } from '../../../../../core/models/feature/module-controller/module-controller';
import { Router } from '@angular/router';
import { FeatureService } from '../../../../../core/services/feature-service/feature-service.service';
@Component({
  selector: 'app-add-module-controller',
  templateUrl: './add-module-controller.component.html',
  styleUrls: ['./add-module-controller.component.scss']
})
export class AddModuleControllerComponent implements OnInit {
  moduleController:ModuleController;
  moduleControllerForm = new FormGroup({
    slno:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    moduleID:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    moduleSeqID:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    machineID: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    machineSequenceID: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    run: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
});
  constructor(private featureService:FeatureService,private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    var self = this;
    let data = new ModuleController();
    
    data.slno = this.moduleControllerForm.controls["slno"].value;
    data.moduleID = this.moduleControllerForm.controls["moduleID"].value;
    data.moduleSeqID = this.moduleControllerForm.controls["moduleSeqID"].value;
    data.machineID = this.moduleControllerForm.controls["machineID"].value;
    data.machineSequenceID = this.moduleControllerForm.controls["machineSequenceID"].value;
    data.run = this.moduleControllerForm.controls["run"].value;
    data.statusID = 0;
    data.cudStatusID = 0;   
    data.userId = 123;
    data.createdOn =null;
    data.updatedOn = null;
    self.featureService.addModuleController(data);
    setTimeout(response => {
      self.router.navigate(['/admin/feature']);
    })
  }
}
