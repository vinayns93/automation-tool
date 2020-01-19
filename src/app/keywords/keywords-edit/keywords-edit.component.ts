import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Keywords } from '../../models/keyword.model';
import { KeywordService } from '../../services/keyword.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-keywords-edit',
  templateUrl: './keywords-edit.component.html',
  styleUrls: ['./keywords-edit.component.scss']
})
export class KeywordsEditComponent implements OnInit {

  id:number;
  keywords:Keywords;
  keywordsForm = new FormGroup({
      id: new FormControl(''),
      functionName:  new FormControl('', Validators.required),
      stepDescription:  new FormControl('', Validators.required),
      actionOrKeyword: new FormControl('', Validators.required),
      objectLogicalName: new FormControl('', Validators.required),
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
      featureName: new FormControl('', Validators.required)
  });
  constructor(private route:ActivatedRoute, private service:KeywordService,private router: Router) { 
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getKeywordbyId(this.id);
  }

  getKeywordbyId(num:number) {
   this.service.getKeyword(num)
   .subscribe((result)=>{
    console.log(result);
    this.keywords = result;
    this.populateFormFields();
  },
   error =>{
     console.log(error.message);
   },
   ()=>{
     console.log(this.keywords);
   })
  }

   populateFormFields() {
    if (this.keywordsForm) {
      this.keywordsForm.reset();
    }
    this.keywordsForm.patchValue({
      id: this.keywords.id,
      functionName:  this.keywords.functionName,
      stepDescription:  this.keywords.stepDescription,
      actionOrKeyword: this.keywords.actionOrKeyword,
      objectLogicalName: this.keywords.objectLogicalName ,
      execute: this.keywords.execute,
      param1: this.keywords.param1,
      param2: this.keywords.param2,
      param3: this.keywords.param3,
      param4: this.keywords.param4,
      param5: this.keywords.param5,
      param6: this.keywords.param6,
      param7: this.keywords.param7,
      param8: this.keywords.param8,
      param9: this.keywords.param9,
      param10: this.keywords.param10,
      featureName: this.keywords.featureName
    });
   }
  
  onSubmit() {
    let data = new Keywords();
    data.id = this.keywordsForm.controls["id"].value;
    data.functionName = this.keywordsForm.controls["functionName"].value;
    data.stepDescription = this.keywordsForm.controls["stepDescription"].value;
    data.actionOrKeyword = this.keywordsForm.controls["actionOrKeyword"].value;
    data.objectLogicalName = this.keywordsForm.controls["objectLogicalName"].value;
    data.functionName = this.keywordsForm.controls["functionName"].value;
    data.execute = this.keywordsForm.controls["execute"].value;
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
    data.featureName = this.keywordsForm.controls["featureName"].value;
    
    this.service.updateKeyword(data.id,data);
    setTimeout(f=>{
      this.router.navigate(['/keywords']);
    },2200)
  }

}
