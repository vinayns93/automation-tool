import { Component, OnInit } from '@angular/core';
import { TestScript } from '../../../../core/models';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TestScriptsService } from '../../../../core/services/test-scripts/testscripts.service';
import { Dropdown } from 'primeng/dropdown/dropdown';
import { SelectItem } from 'primeng/api/selectitem';
import { KeywordService } from '../../../../core/services/keywords-service/keyword.service';

@Component({
  selector: 'app-add-test-script',
  templateUrl: './add-test-script.component.html',
  styleUrls: ['./add-test-script.component.scss']
})
export class AddTestScriptComponent implements OnInit {
  runValues: any;
  selectedRun: string;
  testScript: TestScript;
  newTestScriptObj: TestScript;
  objFunctionNames : SelectItem[]= [];

  testscriptForm = new FormGroup({
    testCaseID: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    tcStepID: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    testScriptName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    functionDescription: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    functionName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    run: new FormControl(''),
    module: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
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
  constructor(private testScriptsService: TestScriptsService, private router: Router, private keywordService: KeywordService) { 
    this.runValues = [
      { label: 'YC' },
      { label: 'YS' },
      { label: 'NO' },
    ];
  }

  ngOnInit() {
    this.populateFunctionNames();
  }
 
 populateFunctionNames() {
  this.keywordService.getAllFunctionNames()
    .subscribe((functionNames) => {
      if(functionNames){
        functionNames.forEach(data => {
          this.objFunctionNames.push({label: data, value: data});
        });
      }
      return this.objFunctionNames;
    });
}
  onSubmit() {
    var self = this;
    let data = new TestScript();

    data.testCaseID = this.testscriptForm.controls["testCaseID"].value;
    data.tcStepID = this.testscriptForm.controls["tcStepID"].value;
    data.testScriptName = this.testscriptForm.controls["testScriptName"].value;
    data.functionDescription = this.testscriptForm.controls["functionDescription"].value;
    data.functionName = this.testscriptForm.controls["functionName"].value;
    data.run = this.selectedRun;
    data.module = this.testscriptForm.controls["module"].value;
    data.param1 = this.testscriptForm.controls["param1"].value;
    data.param2 = this.testscriptForm.controls["param2"].value;
    data.param3 = this.testscriptForm.controls["param3"].value;
    data.param4 = this.testscriptForm.controls["param4"].value;
    data.param5 = this.testscriptForm.controls["param5"].value;
    data.param6 = this.testscriptForm.controls["param6"].value;
    data.param7 = this.testscriptForm.controls["param7"].value;
    data.param8 = this.testscriptForm.controls["param8"].value;
    data.param9 = this.testscriptForm.controls["param9"].value;
    data.param10 = this.testscriptForm.controls["param10"].value;
    data.param11 = this.testscriptForm.controls["param11"].value;
    data.param12 = this.testscriptForm.controls["param12"].value;
    data.param13 = this.testscriptForm.controls["param13"].value;
    data.param14 = this.testscriptForm.controls["param14"].value;
    data.param15 = this.testscriptForm.controls["param15"].value;
    data.param16 = this.testscriptForm.controls["param16"].value;
    data.param17 = this.testscriptForm.controls["param17"].value;
    data.param18 = this.testscriptForm.controls["param18"].value;
    data.param19 = this.testscriptForm.controls["param19"].value;
    data.param20 = this.testscriptForm.controls["param20"].value;
    data.param21 = this.testscriptForm.controls["param21"].value;
    data.param22 = this.testscriptForm.controls["param22"].value;
    data.param23 = this.testscriptForm.controls["param23"].value;
    data.param24 = this.testscriptForm.controls["param24"].value;
    data.param25 = this.testscriptForm.controls["param25"].value;
    data.param26 = this.testscriptForm.controls["param26"].value;
    data.param27 = this.testscriptForm.controls["param27"].value;
    data.param28 = this.testscriptForm.controls["param28"].value;
    data.param29 = this.testscriptForm.controls["param29"].value;
    data.param30 = this.testscriptForm.controls["param30"].value;
    data.param31 = this.testscriptForm.controls["param31"].value;
    data.param32 = this.testscriptForm.controls["param32"].value;
    data.param33 = this.testscriptForm.controls["param33"].value;
    data.param34 = this.testscriptForm.controls["param34"].value;
    data.param35 = this.testscriptForm.controls["param35"].value;
    data.param36 = this.testscriptForm.controls["param36"].value;
    data.param37 = this.testscriptForm.controls["param37"].value;
    data.param38 = this.testscriptForm.controls["param38"].value;
    data.param39 = this.testscriptForm.controls["param39"].value;
    data.param40 = this.testscriptForm.controls["param40"].value;
    data.param41 = this.testscriptForm.controls["param41"].value;
    data.param42 = this.testscriptForm.controls["param42"].value;
    data.param43 = this.testscriptForm.controls["param43"].value;
    data.param44 = this.testscriptForm.controls["param44"].value;
    data.param45 = this.testscriptForm.controls["param45"].value;
    data.param46 = this.testscriptForm.controls["param46"].value;
    data.param47 = this.testscriptForm.controls["param47"].value;
    data.param48 = this.testscriptForm.controls["param48"].value;
    data.param49 = this.testscriptForm.controls["param49"].value;
    data.param50 = this.testscriptForm.controls["param50"].value;
    data.param51 = this.testscriptForm.controls["param51"].value;
    data.param52 = this.testscriptForm.controls["param52"].value;
    data.param53 = this.testscriptForm.controls["param53"].value;
    data.param54 = this.testscriptForm.controls["param54"].value;
    data.param55 = this.testscriptForm.controls["param55"].value;
    data.param56 = this.testscriptForm.controls["param56"].value;
    data.param57 = this.testscriptForm.controls["param57"].value;
    data.param58 = this.testscriptForm.controls["param58"].value;
    data.param59 = this.testscriptForm.controls["param59"].value;
    data.param60 = this.testscriptForm.controls["param60"].value;
    data.param61 = this.testscriptForm.controls["param61"].value;
    data.param62 = this.testscriptForm.controls["param62"].value;
    data.param63 = this.testscriptForm.controls["param63"].value;
    data.param64 = this.testscriptForm.controls["param64"].value;
    data.param65 = this.testscriptForm.controls["param65"].value;
    data.param66 = this.testscriptForm.controls["param66"].value;
    data.param67 = this.testscriptForm.controls["param67"].value;
    data.param68 = this.testscriptForm.controls["param68"].value;
    data.param69 = this.testscriptForm.controls["param69"].value;
    data.param70 = this.testscriptForm.controls["param70"].value;
    data.param71 = this.testscriptForm.controls["param71"].value;
    data.param72 = this.testscriptForm.controls["param72"].value;
    data.param73 = this.testscriptForm.controls["param73"].value;
    data.param74 = this.testscriptForm.controls["param74"].value;
    data.param75 = this.testscriptForm.controls["param75"].value;
    data.param76 = this.testscriptForm.controls["param76"].value;
    data.param77 = this.testscriptForm.controls["param77"].value;
    data.param78 = this.testscriptForm.controls["param78"].value;
    data.param79 = this.testscriptForm.controls["param79"].value;
    data.param80 = this.testscriptForm.controls["param80"].value;
    data.param81 = this.testscriptForm.controls["param81"].value;
    data.param82 = this.testscriptForm.controls["param82"].value;
    data.param83 = this.testscriptForm.controls["param83"].value;
    data.param84 = this.testscriptForm.controls["param84"].value;
    data.param85 = this.testscriptForm.controls["param85"].value;
    data.param86 = this.testscriptForm.controls["param86"].value;
    data.param87 = this.testscriptForm.controls["param87"].value;
    data.param88 = this.testscriptForm.controls["param88"].value;
    data.param89 = this.testscriptForm.controls["param89"].value;
    data.param90 = this.testscriptForm.controls["param90"].value;
    data.param91 = this.testscriptForm.controls["param91"].value;
    data.param92 = this.testscriptForm.controls["param92"].value;
    data.param93 = this.testscriptForm.controls["param93"].value;
    data.param94 = this.testscriptForm.controls["param94"].value;
    data.param95 = this.testscriptForm.controls["param95"].value;
    data.param96 = this.testscriptForm.controls["param96"].value;
    data.param97 = this.testscriptForm.controls["param97"].value;
    data.param98 = this.testscriptForm.controls["param98"].value;
    data.param99 = this.testscriptForm.controls["param99"].value;
    data.param100 = this.testscriptForm.controls["param100"].value;
    data.statusID = 0;
    data.cudStatusID = 0;
    data.isLocked = false;
    data.lockedByUser = 0;
    data.createdOn = null;
    data.updatedOn = null;
    self.testScriptsService.addTestScript(data);
    setTimeout(() => {
      self.router.navigate(['/admin/testscripts']);
    })
  }
}
