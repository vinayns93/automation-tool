import { Component, OnInit } from '@angular/core';
import { Keywords } from '../../../../core/models';
import { ActivatedRoute } from '@angular/router';
import { KeywordService } from '../../../../core/services/keywords-service/keyword.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html',
  styleUrls: ['./edit-keyword.component.scss']
})
export class EditKeywordComponent implements OnInit {

  editKeywordObj: Keywords;
  id: any;
  userId: any;
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

  constructor(private activatedRoute: ActivatedRoute, private service: KeywordService) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
    this.userId = activatedRoute.snapshot.paramMap.get("userId");
   }

  ngOnInit() {
    let getKeywordreq = this.service.getKeyword(this.id, this.userId)
    .subscribe((result: Keywords) => {
      this.editKeywordObj = result;
      getKeywordreq.unsubscribe()
    },
    error => {
      console.log(error);
    },
    () => {

    });
  }

}
