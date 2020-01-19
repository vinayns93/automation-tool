import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Keywords } from '../../../models/keyword.model';
import { KeywordService } from '../../../services/keyword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {

  keywords: Keywords[];
  cols:any[];
  loading:boolean = true;
  constructor(private service: KeywordService,private router:Router) { }

  ngOnInit() {
    this.loading = true;
    this.getKeywords();
    this.cols=[
      { field: 'functionName', header: 'Function Name' , width: '50%'},
      { field: 'stepDescription', header: 'Step Description' ,width: '50%' },
      { field: 'actionOrKeyword', header: 'Action/Keyword',width: '50%' },
      { field: 'objectLogicalName', header: 'Object LogicalName' , width: '50%'},
      { field: 'execute', header: 'Execute' ,width: '50%'},
      { field: 'param1', header: 'Param1' ,width: '50%'},
      { field: 'param2', header: 'Param2' ,width: '50%'},
      { field: 'param3', header: 'Param3' ,width: '50%'},
      { field: 'param4', header: 'Param4',width: '50%' },
      { field: 'featureName', header: 'Feature Name',width: '50%' },
      { field: 'actions', header: 'Actions',width: '50%' }
  ];
  }

  getKeywords(){
    this.service.getKeywords()
    .subscribe((result)=>{
      //console.log(result);
      this.keywords = result;
      this.loading = false;
      
    },
     error =>{
       console.log(error.message);

     },
     ()=>{
       //console.log(this.testControllers3);
     })
  }

  deleteKeyword(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteKeyword(id);
       setTimeout(f=>{
         this.getKeywords();
       },2200)
    }
  }
  onRowEditInit(id:number){
    this.router.navigate(['/keywords/edit', id]);
  }
}
