import { Component, OnInit } from '@angular/core';
import { Keywords } from '../../../../core/models';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from '../../../../core/services/keywords-service/keyword.service';
import { RepositoryService } from '../../../../core/services/repository-service/repository.service';
import { SelectItem } from 'primeng/api/selectitem';
import { MultiSelectItem } from 'primeng/multiselect/public_api';

@Component({
  selector: 'app-add-keyword',
  templateUrl: './add-keyword.component.html',
  styleUrls: ['./add-keyword.component.scss']
})
export class AddKeywordComponent implements OnInit {

  objLogicalNames: SelectItem[] = [];
  options_LogicalName: any;
  option_value: SelectItem;
  runValues: any;
  keywords:Keywords;
  newKeywordObj: Keywords = new Keywords();
  keywordsForm = new FormGroup({
    functionName:  new FormControl('', [Validators.required]),
    stepDescription:  new FormControl('', [Validators.required]),
    actionOrKeyword: new FormControl('', [Validators.required]),
    objectLogicalName: new FormControl(''),
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
    param10: new FormControl('')
});
  constructor(private route:ActivatedRoute, private service:KeywordService,
              private router: Router, public repositoryService: RepositoryService) { }

  ngOnInit() {
    this.populatelogicalNames();
    this.runValues = [
      { label: 'YC', value: 'YC' },
      { label: 'YS' , value: 'YS'},
      { label: 'NO' , value: 'NO'}
    ];
  }

  populatelogicalNames() {
    this.repositoryService.getLogicalNames()
      .subscribe((logicalNames) => {
        if(logicalNames){
          logicalNames.forEach(data => {
            // this.option_value.label = data;
            // this.option_value.value = data;
            this.objLogicalNames.push({label: data, value: data});
          });
        }
        return this.objLogicalNames;
      });
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
    data.createdOn = null;
    data.updatedOn = null;
    data.updatedOn = "";
    self.service.addKeyword(data);
    setTimeout(response => {
      self.router.navigate(['/admin/keywords']);
    })
  }

}
