import { Component, OnInit } from '@angular/core';
import { TestScript } from '../../../../core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestScriptsService } from '../../../../core/services/test-scripts/testscripts.service';

@Component({
  selector: 'app-edit-test-script',
  templateUrl: './edit-test-script.component.html',
  styleUrls: ['./edit-test-script.component.scss']
})
export class EditTestScriptComponent implements OnInit {

  editTestScriptObj: TestScript = new TestScript();
  id: any;
  runValues:any;
  
  testscriptForm = new FormGroup({
    testCaseID: new FormControl(''),
    tcStepID: new FormControl(''),
    testScriptName: new FormControl(''),
    functionDescription: new FormControl(''),
    functionName: new FormControl(''),
    run: new FormControl(''),
    module: new FormControl(''),
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
    param21: new FormControl(''),
    param22: new FormControl(''),
    param23: new FormControl(''),
    param24: new FormControl(''),
    param25: new FormControl(''),
    param26: new FormControl(''),
    param27: new FormControl(''),
    param28: new FormControl(''),
    param29: new FormControl(''),
    param30: new FormControl(''),
    param31: new FormControl(''),
    param32: new FormControl(''),
    param33: new FormControl(''),
    param34: new FormControl(''),
    param35: new FormControl(''),
    param36: new FormControl(''),
    param37: new FormControl(''),
    param38: new FormControl(''),
    param39: new FormControl(''),
    param40: new FormControl(''),
    param41: new FormControl(''),
    param42: new FormControl(''),
    param43: new FormControl(''),
    param44: new FormControl(''),
    param45: new FormControl(''),
    param46: new FormControl(''),
    param47: new FormControl(''),
    param48: new FormControl(''),
    param49: new FormControl(''),
    param50: new FormControl(''),
    param51: new FormControl(''),
    param52: new FormControl(''),
    param53: new FormControl(''),
    param54: new FormControl(''),
    param55: new FormControl(''),
    param56: new FormControl(''),
    param57: new FormControl(''),
    param58: new FormControl(''),
    param59: new FormControl(''),
    param60: new FormControl(''),
    param61: new FormControl(''),
    param62: new FormControl(''),
    param63: new FormControl(''),
    param64: new FormControl(''),
    param65: new FormControl(''),
    param66: new FormControl(''),
    param67: new FormControl(''),
    param68: new FormControl(''),
    param69: new FormControl(''),
    param70: new FormControl(''),
    param71: new FormControl(''),
    param72: new FormControl(''),
    param73: new FormControl(''),
    param74: new FormControl(''),
    param75: new FormControl(''),
    param76: new FormControl(''),
    param77: new FormControl(''),
    param78: new FormControl(''),
    param79: new FormControl(''),
    param80: new FormControl(''),
    param81: new FormControl(''),
    param82: new FormControl(''),
    param83: new FormControl(''),
    param84: new FormControl(''),
    param85: new FormControl(''),
    param86: new FormControl(''),
    param87: new FormControl(''),
    param88: new FormControl(''),
    param89: new FormControl(''),
    param90: new FormControl(''),
    param91: new FormControl(''),
    param92: new FormControl(''),
    param93: new FormControl(''),
    param94: new FormControl(''),
    param95: new FormControl(''),
    param96: new FormControl(''),
    param97: new FormControl(''),
    param98: new FormControl(''),
    param99: new FormControl(''),
    param100: new FormControl('')
  });

  constructor(private activatedRoute: ActivatedRoute, private testScriptService: TestScriptsService,
    private router: Router) { 
    this.id = activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.runValues = [
      { label: 'YC', value: 'YC' },
      { label: 'YS', value: 'YS' },
      { label: 'NO' , value: 'NO'}
    ];  
    let gettestSriptreq = this.testScriptService.getTestScript(this.id)
    .subscribe((result: TestScript) => {
      this.editTestScriptObj = result;
      gettestSriptreq.unsubscribe()
    },
    error => {
      console.log(error);
    },
    () => {

    });
  }

  onSubmit(){
    this.testScriptService.updateTestScript(this.editTestScriptObj.id, this.editTestScriptObj);
      setTimeout(f=>{
        this.router.navigate(['/admin/testscripts']);
      },2200)
  }

}
