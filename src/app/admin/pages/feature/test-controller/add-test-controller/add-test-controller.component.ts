import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TestController } from '../../../../../core/models/feature/test-controller/test-controller';
import { Router } from '@angular/router';
import { FeatureService } from '../../../../../core/services/feature-service/feature-service.service';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-add-test-controller',
  templateUrl: './add-test-controller.component.html',
  styleUrls: ['./add-test-controller.component.scss']
})
export class AddTestControllerComponent implements OnInit {
  testController:TestController;
  runValues : any;
  selectedRun : any;
  objFeatureID: SelectItem[] = [];

  testControllerForm = new FormGroup({
    featureID:  new FormControl('',[Validators.required]),
    testCaseID:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    run: new FormControl('',[Validators.required]),
    iterations: new FormControl('', [Validators.required]),
    browsers: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    sequenceID: new FormControl('', [Validators.required]),
    testType: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    jiraID: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    stepsCount: new FormControl('', [Validators.required]),
    testScriptName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    testScriptDescription: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
});
  constructor(private featureService:FeatureService,private router: Router) { }

  ngOnInit() {
    this.populateFeatureID()
    this.runValues = [
      { label: 'Y', value: 'Y' },
      { label: 'N' , value: 'N'}
    ];
  }
  populateFeatureID() {
    this.featureService.getAllFeatureID()
      .subscribe((FeatureID) => {
        if(FeatureID){
          FeatureID.forEach(data => {
            this.objFeatureID.push({label: data, value: data});
          });
        }
        return this.objFeatureID;
      });
  }
  onSubmit(){
    var self = this;
    let data = new TestController();
    data.featureID = this.testControllerForm.controls["featureID"].value;
    data.testCaseID = this.testControllerForm.controls["testCaseID"].value;
    data.run = this.testControllerForm.controls["run"].value;
    data.iterations = this.testControllerForm.controls["iterations"].value;
    data.browsers = this.testControllerForm.controls["browsers"].value;
    data.sequenceID = this.testControllerForm.controls["sequenceID"].value;
    data.testType = this.testControllerForm.controls["testType"].value;
    data.jiraID = this.testControllerForm.controls["jiraID"].value;
    data.stepsCount = this.testControllerForm.controls["stepsCount"].value;
    data.testScriptName = this.testControllerForm.controls["testScriptName"].value;
    data.testScriptDescription = this.testControllerForm.controls["testScriptDescription"].value;
    data.statusID = 0;
    data.cudStatusID = 0;  
    data.updatedOn = '';
    data.createdOn='';
    data.isLocked = false;
    data.lockedByUser = 0;
    self.featureService.addTestController(data);
    setTimeout(response => {
      self.router.navigate(['/admin/feature']);
    })
  }
}
