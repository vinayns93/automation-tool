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
  keywordsForm = new FormGroup({
    id: new FormControl('', Validators.required),
    functionName:  new FormControl('', Validators.required),
    stepDescription:  new FormControl('', Validators.required),
    actionOrKeyword: new FormControl('', Validators.required),
    objectLogicalName: new FormControl('', Validators.required),
    run: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
    param1: new FormControl('', [Validators.required]),
    param2: new FormControl('', Validators.required),
    param3: new FormControl('', Validators.required),
    param4: new FormControl('', Validators.required),
    param5: new FormControl('', Validators.required),
    param6: new FormControl('', Validators.required),
    param7: new FormControl('', Validators.required),
    param8: new FormControl('', Validators.required),
    param9: new FormControl('', Validators.required),
    param10: new FormControl('', Validators.required),
    module: new FormControl('', Validators.required),
    statusID: new FormControl('', Validators.required),
    cudStatusID: new FormControl('', Validators.required),
    isLocked: new FormControl('', Validators.required)
});
  constructor(private route:ActivatedRoute, private service:KeywordService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    let data = new Keywords();
    data.id = this.keywordsForm.controls["id"].value;
    data.functionName = this.keywordsForm.controls["functionName"].value;
    data.stepDescription = this.keywordsForm.controls["stepDescription"].value;
    data.actionOrKeyword = this.keywordsForm.controls["actionOrKeyword"].value;
    data.objectLogicalName = this.keywordsForm.controls["objectLogicalName"].value;
    data.run = this.keywordsForm.controls["run"].value;
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
    data.module = this.keywordsForm.controls["module"].value;
    data.statusID = this.keywordsForm.controls["statusID"].value;
    data.cudStatusID = this.keywordsForm.controls["cudStatusID"].value;
    data.isLocked = false;
    data.lockedByUser = 0;
    data.createdOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    data.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    data.userId = 123;

    this.service.addKeyword(data);
    setTimeout(response => {
      this.router.navigate(['/admin/keywords']);
    })
  }

}
