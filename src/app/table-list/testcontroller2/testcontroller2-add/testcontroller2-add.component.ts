import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController2 } from '../../../models/testcontrolller2.model';
import { TestControllerService } from '../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-testcontroller2-add',
  templateUrl: './testcontroller2-add.component.html',
  styleUrls: ['./testcontroller2-add.component.scss']
})
export class Testcontroller2AddComponent implements OnInit {

  testController2:TestController2;
  testControllerForm = new FormGroup({
    id: new FormControl('',Validators.required),
    sno: new FormControl('', Validators.required),
    featureID: new FormControl('', Validators.required),
    testCaseID:new FormControl('', Validators.required),
    run:new FormControl('', Validators.required) ,
    iterations:new FormControl('', Validators.required),
    browsers:new FormControl('', Validators.required),
    sequenceID:new FormControl('', Validators.required),
    testType:new FormControl('', Validators.required),
    jira_ID:new FormControl('', Validators.required),
    stepsCount:new FormControl('', Validators.required),
    testScriptName:new FormControl('', Validators.required),
    testScriptDescription:new FormControl('', Validators.required)
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
      id: this.testController2.id,
    sno:  this.testController2.sno,
    featureID:  this.testController2.featureID,
    testCaseID: this.testController2.testCaseID,
    run: this.testController2.run ,
    iterations: this.testController2.iterations,
    browsers: this.testController2.browsers,
    sequenceID: this.testController2.sequenceID,
    testType: this.testController2.testType,
    jira_ID: this.testController2.jira_ID,
    stepsCount: this.testController2.stepsCount,
    testScriptName: this.testController2.testScriptName,
    testScriptDescription: this.testController2.testScriptDescription
    });
   }

  onSubmit() {
    let data = new TestController2();
    data.id = this.testControllerForm.controls["id"].value;
    data.sno = this.testControllerForm.controls["sno"].value;
    data.featureID = this.testControllerForm.controls["featureID"].value;
    data.testCaseID = this.testControllerForm.controls["testCaseID"].value;
    data.run = this.testControllerForm.controls["run"].value;
    data.iterations = this.testControllerForm.controls["iterations"].value;
    data.browsers = this.testControllerForm.controls["browsers"].value;
    data.sequenceID = this.testControllerForm.controls["sequenceID"].value;
    data.testType = this.testControllerForm.controls["testType"].value;
    data.jira_ID = this.testControllerForm.controls["jira_ID"].value;
    data.testScriptName = this.testControllerForm.controls["testScriptName"].value;
    data.testScriptDescription = this.testControllerForm.controls["testScriptDescription"].value;
    data.stepsCount = this.testControllerForm.controls["stepsCount"].value;
    
    this.controllerservice.addController2(data);
    setTimeout(f=>{
      this.router.navigate(['/table-list']);
    },2200)
  }
}
