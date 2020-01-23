import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestController } from '../../../../../core/models/feature/test-controller/test-controller';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from '../../../../../core';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-edit-test-controller',
  templateUrl: './edit-test-controller.component.html',
  styleUrls: ['./edit-test-controller.component.scss']
})
export class EditTestControllerComponent implements OnInit {
  id:number;
  testController2:TestController;
  editTControllerObj: TestController = new TestController();
  testControllerForm = new FormGroup({
    
    sno: new FormControl(''),
    featureID: new FormControl('', Validators.required),
    testCaseID:new FormControl('', Validators.required),
    run:new FormControl('', Validators.required) ,
    iterations:new FormControl('', Validators.required),
    browsers:new FormControl('', Validators.required),
    sequenceID:new FormControl('', Validators.required),
    testType:new FormControl('', Validators.required),
    jiraID:new FormControl('', Validators.required),
    stepsCount:new FormControl('', Validators.required),
    testScriptName:new FormControl('', Validators.required),
    testScriptDescription:new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private controllerservice:FeatureService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getTestController(this.id);
  }

  getTestController(num:number) {
   this.controllerservice.getTestController(num)
   .subscribe((result)=>{
    this.editTControllerObj = result;
  },
   error =>{
     console.log(error.message);
   },
   ()=>{ })
  }

   
  
  onSubmit() {
    // let data = new TestController2();
    // data.id = this.testControllerForm.controls["id"].value;
    // data.sno = this.testControllerForm.controls["sno"].value;
    // data.featureID = this.testControllerForm.controls["featureID"].value;
    // data.testCaseID = this.testControllerForm.controls["testCaseID"].value;
    // data.run = this.testControllerForm.controls["run"].value;
    // data.iterations = this.testControllerForm.controls["iterations"].value;
    // data.browsers = this.testControllerForm.controls["browsers"].value;
    // data.sequenceID = this.testControllerForm.controls["sequenceID"].value;
    // data.testType = this.testControllerForm.controls["testType"].value;
    // data.jira_ID = this.testControllerForm.controls["jira_ID"].value;
    // data.testScriptName = this.testControllerForm.controls["testScriptName"].value;
    // data.testScriptDescription = this.testControllerForm.controls["testScriptDescription"].value;
    // data.stepsCount = this.testControllerForm.controls["stepsCount"].value;
    this.editTControllerObj.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    
    this.controllerservice.updateTestController(this.editTControllerObj.id,this.editTControllerObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature/']);
    },2200)
  }
}
