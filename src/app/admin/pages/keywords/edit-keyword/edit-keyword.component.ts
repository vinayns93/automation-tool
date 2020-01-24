import { Component, OnInit } from '@angular/core';
import { Keywords } from '../../../../core/models';
import { ActivatedRoute, Router } from '@angular/router';
import { KeywordService } from '../../../../core/services/keywords-service/keyword.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem}  from 'primeng/api';
import { keyWordsRunOptions } from '../../../../core/constants/keywords';


@Component({
  selector: 'app-edit-keyword',
  templateUrl: './edit-keyword.component.html',
  styleUrls: ['./edit-keyword.component.scss']
})
export class EditKeywordComponent implements OnInit {

  run_K_Values: SelectItem[];

  editKeywordObj: Keywords = new Keywords();
  id: any;
  keywordsForm = new FormGroup({
    run: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
});

  constructor(private activatedRoute: ActivatedRoute, private service: KeywordService
              ,private router: Router) {
    this.id = activatedRoute.snapshot.paramMap.get("id");
   }

  ngOnInit() {
    this.run_K_Values = keyWordsRunOptions;
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
