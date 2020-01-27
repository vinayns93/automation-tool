import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TestScriptsService } from '../../../core/services/test-scripts/testscripts.service';
import { TestScript } from '../../../core/models';
import { testScriptsColumns } from '../../../core/constants/testscripts';
import { SelectItem } from 'primeng/api/selectitem';
import { GlobalService } from '../../../core';

@Component({
  selector: 'app-test-scripts',
  templateUrl: './test-scripts.component.html',
  styleUrls: ['./test-scripts.component.scss'],
  providers:[TestScriptsService],
  encapsulation: ViewEncapsulation.None
})
export class TestScriptsComponent implements OnInit {

  testscripts: TestScript[];
  cols:any[];
  tableColumns: any[];
  columns: SelectItem[];
  loading:boolean = false;

  constructor(private service: TestScriptsService,private router:Router,
    private globalService: GlobalService) { }

  ngOnInit() {
    this.getTestScripts();
    this.columns= testScriptsColumns;
    this.tableColumns = [];
    this.LoadTestScriptsColumns();
    this.globalService.SetCurrentTab('TESTSCRIPTS');
  }

  LoadTestScriptsColumns() {
    this.tableColumns = [];
    testScriptsColumns.forEach(column => {
      let col = column.value;
      if(!(col.header.includes('Param '))) {
        this.tableColumns.push(col);
      }
    });
  }

  loadTestScriptsColumns(event){
    var self = this;
    self.loading = true;
    self.tableColumns = [];
    if(event.value != undefined){
      event.value.forEach(col => {
        if(col)
        self.tableColumns.push(col);
      });
      
    }
    self.loading = false;
  }

  getTestScripts(){
    var self = this;
    self.service.getTestScripts()
    .subscribe((result: TestScript[])=>{
      self.testscripts = [];
      if(result.length > 0){
        result.filter(browserItem => {
          browserItem.statusID == 0 ? this.testscripts.push(browserItem) 
            : null ;
          });
      }
      self.loading =false;
      
    },
     error =>{
       console.log(error.message);
     },
     ()=>{ })
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
    this.router.navigate(['admin/testscripts/edit', id]);
  }

}
