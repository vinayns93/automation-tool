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
  runValues:any;

  editTControllerObj: TestController = new TestController();
  testControllerForm = new FormGroup({
    featureID: new FormControl('', Validators.required),
    testCaseID:new FormControl('', Validators.required),
    run:new FormControl('') ,
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
    this.runValues = [
      { label: 'Y', value: 'Y' },
      { label: 'N' , value: 'N'}
    ];
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
    this.controllerservice.updateTestController(this.editTControllerObj.id,this.editTControllerObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/feature/']);
    },2200)
  }
}
