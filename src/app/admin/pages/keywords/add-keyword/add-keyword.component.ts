import { Component, OnInit } from '@angular/core';
import { Keywords } from '../../../../core/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from '../../../../services/keyword.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.scss']
})
export class AddKeywordComponent implements OnInit {

  keywords:Keywords;
  newKeywordObj: Keywords;
  keywordsForm = new FormGroup({
    functionName:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    stepDescription:  new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    actionOrKeyword: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    objectLogicalName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    run: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    module: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    // statusID: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    // cudStatusID: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
    isLocked: new FormControl(''),
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
    param20: new FormControl('')
});
  constructor(private route:ActivatedRoute, private service:KeywordService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    var self = this;
    let data = new Keywords();
    
    data.functionName = this.keywordsForm.controls["functionName"].value;
    data.stepDescription = this.keywordsForm.controls["stepDescription"].value;
    data.actionOrKeyword = this.keywordsForm.controls["actionOrKeyword"].value;
    data.objectLogicalName = this.keywordsForm.controls["objectLogicalName"].value;
    data.run = this.keywordsForm.controls["run"].value;
    data.module = this.keywordsForm.controls["module"].value;
    data.param1 = this.keywordsForm.controls["param1"].value;
    data.param2 = this.keywordsForm.controls["param2"].value;
    data.param3 = this.keywordsForm.controls["param3"].value;
    data.param4 = this.keywordsForm.controls["param4"].value;
    data.param5 = this.keywordsForm.controls["param5"].value;
    data.param6 = this.keywordsForm.controls["param6"].value;
    data.param7 = this.keywordsForm.controls["param7"].value;
    data.param8 = this.keywordsForm.controls["param8"].value;
    data.param9 = this.keywordsForm.controls["param9"].value;
    data.param10 = this.keywordsForm.controls["param10"].value;
    data.statusID = 0;
    data.cudStatusID = 0;
    data.isLocked = false;
    data.lockedByUser = 0;
    data.createdOn = formatDate(new Date(), 'yyyy-MMM-dd', 'en').toString();
    data.updatedOn = formatDate(new Date(), 'yyyy-MMM-dd', 'en').toString();
    data.updatedOn = "";
    data.userId = 2;
    self.service.addKeyword(data);
    setTimeout(response => {
      self.router.navigate(['/admin/keywords']);
    })
  }

}
