import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Keywords } from '../../../core/models';
import { KeywordService } from '../../../core/services/keywords-service/keyword.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { keywordsColumns } from '../../../core/constants/keywords';
import { Table } from 'primeng/table';
import { GlobalService } from '../../../core';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {

  keywords: Keywords[];
  loading: boolean = false;
  tableColumns: any[];
  columns: SelectItem[];

  @ViewChild(Table, { static: false }) dt: Table;

  constructor(private service: KeywordService, private router: Router, public globalService: GlobalService) { }

  ngOnInit() {
    var self = this;
    self.getKeywords();
    self.columns = keywordsColumns;
    self.tableColumns = [];
    self.LoadAllKeywordsColumns();
    self.globalService.SetCurrentTab('KEYWORDS');
  }

  LoadAllKeywordsColumns() {
    this.tableColumns = [];
    keywordsColumns.forEach(column => {
      this.tableColumns.push(column.value);
    });
  }

  loadKeywordsColumns(event) {
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

  getKeywords() {
    var self = this;
    self.loading = true;
    self.service.getKeywords()
      .subscribe((result: Keywords[]) => {
        self.keywords = [];
        if(result.length > 0){
          result.filter(browserItem => {
            browserItem.statusID == 0 ? this.keywords.push(browserItem) 
              : null ;
          });
        }
        this.dt.reset();
        self.loading = false;
      },
        error => {
          console.log(error.message);
        },
        () => { });
  }

  deleteKeyword(id: number) {
    var self = this;
    if (confirm("Are you sure to delete?")) {
      self.service.deleteKeyword(id);
      setTimeout(f => {
        self.getKeywords();
      }, 2200)
    }
  }
  onRowEditInit(id: number, userId: number) {
    var self = this;
    self.router.navigate(['admin/keywords/edit', id]);
  }
}
