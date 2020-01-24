import { Component, OnInit } from '@angular/core';
import { Keywords } from '../../../../core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from '../../../../core/services/keywords-service/keyword.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem}  from 'primeng/api';

@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html',
  styleUrls: ['./edit-keyword.component.scss']
})
export class EditKeywordComponent implements OnInit {

  runValues:any;

  editKeywordObj: Keywords = new Keywords();
  id: any;
  keywordsForm = new FormGroup({
    functionName:  new FormControl('', [Validators.required]),
    stepDescription:  new FormControl('', [Validators.required]),
    actionOrKeyword: new FormControl('', [Validators.required]),
    objectLogicalName: new FormControl(''),
    run: new FormControl(''),
    module: new FormControl(''),
    id: new FormControl(''),
    param1: new FormControl(''),
    param2: new FormControl(''),
    param3: new FormControl(''),
    param4: new FormControl(''),
    param5: new FormControl(''),
    param6: new FormControl(''),
    param7: new FormControl(''),
    param8: new FormControl(''),
    param9: new FormControl(''),
    param10: new FormControl('')
});

  constructor(private activatedRoute: ActivatedRoute, private service: KeywordService, private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.runValues = [
      { label: 'YC', value: 'YC' },
      { label: 'YS', value: 'YS' },
      { label: 'NO' , value: 'NO'}
    ];  
    let getKeywordreq = this.service.getKeyword(this.id)
    .subscribe((result: Keywords) => {
      this.editKeywordObj = result;
      getKeywordreq.unsubscribe();
    },
    error => {
      console.log(error);
    },
    () => {

    });
  }

  onSubmit(){
    this.service.updateKeyword(this.id, this.editKeywordObj);
    setTimeout(f=>{
      this.router.navigate(['/admin/keywords']);
    },2200)
  }

}
