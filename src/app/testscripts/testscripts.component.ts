import { Component, OnInit } from '@angular/core';
import { TestScript } from '../models/testscript.model';
import { TestScriptsService } from '../services/testscripts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testscripts',
  templateUrl: './testscripts.component.html',
  styleUrls: ['./testscripts.component.scss'],
  providers:[TestScriptsService]
})
export class TestscriptsComponent implements OnInit {

  testscripts: TestScript[];
  cols:any[];
  loading:boolean = true;
  constructor(private service: TestScriptsService,private router:Router) { }

  ngOnInit() {
    this.loading=true;
    this.getTestScripts();
    this.cols=[
        { field: 'testCaseID', header: 'Test CaseID' },
        { field: 'tc_stepID', header: 'TC_StepID' },
        { field: 'testScriptName', header: 'TestScript Name' },
        { field: 'functionDescription', header: 'Function Description' },
        { field: 'functionName', header: 'Function Name' },
        { field: 'execute', header: 'Execute' },
        { field: 'param1', header: 'Param1' },
        { field: 'param2', header: 'Param2' },
        { field: 'param3', header: 'Param3' },
        { field: 'param4', header: 'Param4' },
        { field: 'featureName', header: 'Feature Name' },
        { field: 'actions', header: 'Actions' }
    ];
  }

  getTestScripts(){
    this.service.getTestScripts()
    .subscribe((result)=>{
      //console.log(result);
      this.testscripts = result;
      this.loading =false;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{
       //console.log(this.testControllers3);
     })
  }

  deleteScript(id:number){
    if(confirm("Are you sure to delete?")) {
      this.service.deleteTestScript(id);
       setTimeout(f=>{
         this.getTestScripts();
       },2200)
    }
  }

  onRowEditInit(id:number){
    this.router.navigate(['/testscripts/edit', id]);
  }

}
