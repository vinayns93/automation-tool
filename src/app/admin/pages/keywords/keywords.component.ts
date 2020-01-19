import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Keywords } from '../../../core/models';
import { KeywordService } from '../../../services/keyword.service';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/api/selectitem';
import { keywordsColumns } from '../../../core/constants/keywords';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['./keywords.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KeywordsComponent implements OnInit {

  keywords: Keywords[];
  cols: any[];
  loading: boolean = false;
  tableColumns: any[];
  columns: SelectItem[];

  constructor(private service: KeywordService, private router: Router) { }

  ngOnInit() {
    var self = this;
    self.getKeywords();
    self.columns = keywordsColumns;
    self.tableColumns = [];
  }

  LoadKeywordsColumns(event) {
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
    self.service.getKeywords()
      .subscribe((result: Keywords[]) => {
        self.keywords = result;
        self.loading = false;
      },
        error => {
          console.log(error.message);
        },
        () => {
        })
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
  
  onRowEditInit(id: number) {
    var self = this;
    self.router.navigate(['/keywords/edit', id]);
  }
}
