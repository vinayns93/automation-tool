import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController1 } from '../../../models/testcontroller1.model';
import { TestControllerService } from '../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testcontroller1-add',
  templateUrl: './testcontroller1-add.component.html',
  styleUrls: ['./testcontroller1-add.component.scss']
})
export class Testcontroller1AddComponent implements OnInit {
  testController1:TestController1;
  testControllerForm = new FormGroup({
    id: new FormControl('',Validators.required),
    slno: new FormControl('', Validators.required),
    moduleID: new FormControl('', Validators.required),
    moduleSeqID:new FormControl('', Validators.required),
    machineID:new FormControl('', Validators.required) ,
    machineSequenceID:new FormControl('', Validators.required),
    execute:new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private controllerservice:TestControllerService,private router: Router) { 
  }

  ngOnInit() {
    //this.populateFormFields();
  }

   populateFormFields() {
    if (this.testControllerForm) {
      this.testControllerForm.reset();
    }
    this.testControllerForm.patchValue({
      id: this.testController1.id,
    slno:this.testController1.slno,
    moduleID: this.testController1.moduleID,
    moduleSeqID:this.testController1.moduleSeqID,
    machineID: this.testController1.machineID,
    machineSequenceID:this.testController1.machineSequenceID,
    execute:this.testController1.execute
    });
   }
  
  onSubmit() {
    let data = new TestController1();
    data.id = this.testControllerForm.controls["id"].value;
    data.slno = this.testControllerForm.controls["slno"].value;
    data.moduleID = this.testControllerForm.controls["moduleID"].value;
    data.moduleSeqID = this.testControllerForm.controls["moduleSeqID"].value;
    data.machineID = this.testControllerForm.controls["machineID"].value;
    data.machineSequenceID = this.testControllerForm.controls["machineSequenceID"].value;
    data.execute = this.testControllerForm.controls["execute"].value;
    
    this.controllerservice.addController1(data);
    setTimeout(f=>{
      this.router.navigate(['/table-list']);
    },2200)
  }
}
