import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestScript } from '../../models/testscript.model';
import { TestScriptsService } from '../../services/testscripts.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-testscripts-edit',
  templateUrl: './testscripts-edit.component.html',
  styleUrls: ['./testscripts-edit.component.scss']
})
export class TestscriptsEditComponent implements OnInit {

  id:number;
  testscript:TestScript;
  testScriptForm = new FormGroup({
      id: new FormControl(''),
      testCaseID:  new FormControl('', Validators.required),
      tc_stepID:  new FormControl('', Validators.required),
      testScriptName: new FormControl('', Validators.required),
      functionDescription: new FormControl('', Validators.required),
      functionName: new FormControl('', Validators.required),
      execute: new FormControl('', Validators.required),
      param1: new FormControl(''),
      param2: new FormControl(''),
      param3: new FormControl(''),
      param4: new FormControl(''),
      param5: new FormControl(''),
      param6: new FormControl(''),
      param7: new FormControl(''),
      param8: new FormControl(''),
      param9: new FormControl(''),
      param10: new FormControl(''),
      param11: new FormControl(''),
      param12: new FormControl(''),
      param13: new FormControl(''),
      param14: new FormControl(''),
      param15: new FormControl(''),
      param16: new FormControl(''),
      param17: new FormControl(''),
      param18: new FormControl(''),
      param19: new FormControl(''),
      param20: new FormControl(''),
      featureName: new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private service:TestScriptsService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getTestScriptbyId(this.id);
  }

  getTestScriptbyId(num:number) {
   this.service.getTestScript(num)
   .subscribe((result)=>{
    console.log(result);
    this.testscript = result;
    this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.testscript);
   })
  }

   populateFormFields() {
    if (this.testScriptForm) {
      this.testScriptForm.reset();
    }
    this.testScriptForm.patchValue({
      id: this.testscript.id,
      testCaseID:  this.testscript.testCaseID,
      tc_stepID:  this.testscript.tc_stepID,
      testScriptName: this.testscript.testScriptName,
      functionDescription: this.testscript.functionDescription ,
      functionName: this.testscript.functionName,
      execute: this.testscript.execute,
      param1: this.testscript.param1,
      param2: this.testscript.param2,
      param3: this.testscript.param3,
      param4: this.testscript.param4,
      param5: this.testscript.param5,
      param6: this.testscript.param6,
      param7: this.testscript.param7,
      param8: this.testscript.param8,
      param9: this.testscript.param9,
      param10: this.testscript.param10,
      param11: this.testscript.param11,
      param12: this.testscript.param12,
      param13: this.testscript.param13,
      param14: this.testscript.param14,
      param15: this.testscript.param15,
      param16: this.testscript.param16,
      param17: this.testscript.param17,
      param18: this.testscript.param18,
      param19: this.testscript.param19,
      param20: this.testscript.param20,
      featureName: this.testscript.featureName
    });
   }
  
  onSubmit() {
    let data = new TestScript();
    data.id = this.testScriptForm.controls["id"].value;
    data.testCaseID = this.testScriptForm.controls["testCaseID"].value;
    data.tc_stepID = this.testScriptForm.controls["tc_stepID"].value;
    data.testScriptName = this.testScriptForm.controls["testScriptName"].value;
    data.functionDescription = this.testScriptForm.controls["functionDescription"].value;
    data.functionName = this.testScriptForm.controls["functionName"].value;
    data.execute = this.testScriptForm.controls["execute"].value;
    data.param1 = this.testScriptForm.controls["param1"].value;
    data.param2 = this.testScriptForm.controls["param2"].value;
    data.param3 = this.testScriptForm.controls["param3"].value;
    data.param4 = this.testScriptForm.controls["param4"].value;
    data.param5 = this.testScriptForm.controls["param5"].value;
    data.param6 = this.testScriptForm.controls["param6"].value;
    data.param7 = this.testScriptForm.controls["param7"].value;
    data.param8 = this.testScriptForm.controls["param8"].value;
    data.param9 = this.testScriptForm.controls["param9"].value;
    data.param10 = this.testScriptForm.controls["param10"].value;
    data.param11 = this.testScriptForm.controls["param11"].value;
    data.param12 = this.testScriptForm.controls["param12"].value;
    data.param13 = this.testScriptForm.controls["param13"].value;
    data.param14 = this.testScriptForm.controls["param14"].value;
    data.param15 = this.testScriptForm.controls["param15"].value;
    data.param16 = this.testScriptForm.controls["param16"].value;
    data.param17 = this.testScriptForm.controls["param17"].value;
    data.param18 = this.testScriptForm.controls["param18"].value;
    data.param19 = this.testScriptForm.controls["param19"].value;
    data.param20 = this.testScriptForm.controls["param20"].value;
    data.featureName = this.testScriptForm.controls["featureName"].value;
    
    this.service.updateTestScript(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/testscripts']);
    },2200)
  }

}
