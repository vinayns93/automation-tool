import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController2 } from '../../../models/testcontrolller2.model';
import { TestControllerService } from '../../../services/testcontroller.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-testcontroller2-edit',
  templateUrl: './testcontroller2-edit.component.html',
  styleUrls: ['./testcontroller2-edit.component.scss']
})
export class Testcontroller2EditComponent implements OnInit {
  id:number;
  testController2:TestController2;
  testControllerForm = new FormGroup({
    id: new FormControl(''),
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
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getTestController2byId(this.id);
  }

  getTestController2byId(num:number) {
   this.controllerservice.getController2(num)
   .subscribe((result)=>{
    console.log(result);
    this.testController2 = result;
    this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.testController2);
   })
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
    
    this.controllerservice.updateTestController2(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/table-list']);
    },2200)
  }
}
