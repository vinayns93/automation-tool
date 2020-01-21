import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController1 } from '../../../../../core/models/feature/module-controller/testcontroller1.model';
import { TestControllerService } from '../../../../../core/services/feature-service/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService, ModuleController } from '../../../../../core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-testcontroller1-edit',
  templateUrl: './testcontroller1-edit.component.html',
  styleUrls: ['./testcontroller1-edit.component.scss']
})
export class Testcontroller1EditComponent implements OnInit {
  id:number;
  testController1:TestController1;
  editMControllerObj: ModuleController;
  testControllerForm = new FormGroup({
    id: new FormControl(''),
    slno: new FormControl('', Validators.required),
    moduleID: new FormControl('', Validators.required),
    moduleSeqID:new FormControl('', Validators.required),
    machineID:new FormControl('', Validators.required) ,
    machineSequenceID:new FormControl('', Validators.required),
    run:new FormControl('')
    //,
    // isLocked: new FormControl(''),
    // createdOn: new FormControl(''),
    // updatedOn: new FormControl('')
  });
  constructor(private route:ActivatedRoute, private controllerservice:FeatureService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getModuleController(this.id);
  }

  getModuleController(num:number) {
   this.controllerservice.getModuleController(num)
   .subscribe((result: ModuleController)=>{
    console.log(result);
    this.editMControllerObj = result;
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.editMControllerObj);
   })
  }
  
  onSubmit() {
    // let data = new ModuleController();
    // data.moduleID = this.testControllerForm.controls["moduleID"].value;
    // data.moduleSeqID = this.testControllerForm.controls["moduleSeqID"].value;
    // data.machineID = this.testControllerForm.controls["machineID"].value;
    // data.machineSequenceID = this.testControllerForm.controls["machineSequenceID"].value;
    // data.isLocked = this.testControllerForm.controls["isLocked"].value;
    // data.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    

    this.controllerservice.updateModuleController(this.editMControllerObj.id,this.editMControllerObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature']);
    },2200)
  }
}
