import { Component, OnInit } from '@angular/core';
import { TestData, TestDataService, GlobalService } from '../../../core';
import { SelectItem } from 'primeng/api/selectitem';
import { testDataColumns } from '../../../core/constants/testdata';
import { SortEvent } from 'primeng/api/sortevent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.scss']
})
export class TestDataComponent implements OnInit {

  testData: TestData[];
  cols: any[];
  loading: boolean = false;
  tableColumns: any[];
  columns: SelectItem[];
  rowGroupMetadata: any;
  groupField = "tcid";
  first;

  onSort(){
    this.updateRowGroupMetaData();
  }

  constructor(private service: TestDataService, private globalService: GlobalService, private router:Router) { }

  ngOnInit() {
    this.columns = testDataColumns;
    this.tableColumns = [];
    this.getAllTestdata();
    this.LoadAllTestDataColumns();
    this.updateRowGroupMetaData();
    this.globalService.SetCurrentTab('TESTDATA');
  }

  LoadAllTestDataColumns() {
    this.tableColumns = [];
    testDataColumns.forEach(column => {
      let col = column.value;
      if(!(col.header.includes('Param '))) {
        this.tableColumns.push(col);
      }
    });
  } 

  customSort(event: SortEvent){
    event.data.sort((a, b) => {
      let result = 0;
      let groupField_a = (this.groupField == null) ? null : a[this.groupField];
      let groupField_b = (this.groupField == null) ? null : b[this.groupField];
      let sortField_a = a[event.field];
      let sortField_b = b[event.field];
      if(groupField_a == groupField_b || this.groupField == event.field) {
        if(sortField_a == null && sortField_b != null)
          result = -1;
        else if(sortField_a != null && sortField_b == null)
          result = 1;
        else if(sortField_a == null && sortField_b == null)
          result = 0;
        else if(typeof sortField_a === 'string' && typeof sortField_b === 'string')
          result = sortField_a.localeCompare(sortField_b);
        else
          result = (sortField_a < sortField_b) ? -1 : (sortField_a == sortField_b) ? 0 : 1;
      }
      return (event.order * result);
    });
  }

  loadTestDataColumns(event){
    var self = this;
    self.loading = true;
    self.tableColumns = [];
    if (event.value != undefined) {
      event.value.forEach(col => {
        self.tableColumns.push(col);
      });
    }
    self.loading = false;
  }

  getAllTestdata() {
    var self = this;
    self.loading = true;
    self.service.getAllTestData()
    .subscribe((result: TestData[])=>{
      self.testData = result;
      self.loading = false;
      this.updateRowGroupMetaData();
    },
     error =>{
       console.log(error.message);
     },
     ()=>{ });
  }

  updateRowGroupMetaData() {
    var self = this;
    self.rowGroupMetadata = {};
    if(self.testData){
      for (let i = 0; i < self.testData.length; i++) {
        let rowData = self.testData[i];
        let groupVal = rowData[self.groupField];
        if(i == 0){
          self.rowGroupMetadata[groupVal] = { index: 0, size: 1 };
        }
        else {
          let previousRowData = self.testData[i - 1];
          let previousRowGroup = previousRowData[self.groupField];
          if(groupVal == previousRowGroup)
            self.rowGroupMetadata[groupVal].size++;
          else
            self.rowGroupMetadata[groupVal] = { index: i, size: 1};
        }
        }
    }
  }

  onRowEditInit(id, userId) {
     this.router.navigate(['admin/testdata/edit', id, 2]);
  }

  deleteTestData(id, tcid, iterations) {
    if(confirm("Are you sure to delete?")) {
      this.service.deleteTestData(id, tcid, iterations);
       setTimeout(f=>{
         this.getAllTestdata();
       },2200)
    }
  }
}
