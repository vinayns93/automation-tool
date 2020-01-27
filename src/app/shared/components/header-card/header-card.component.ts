import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-header-card',
  templateUrl: './header-card.component.html',
  styleUrls: ['./header-card.component.scss']
})
export class HeaderCardComponent implements OnInit {

  today: any;

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
    this.globalService.updateActiveUsers();
    this.globalService.updateLatestFeeds();
    this.globalService.updateRecordsModified();
    this.today = formatDate(new Date(), 'dd/MMM/yyyy', 'en').toString();
    this.globalService.setFeatureRecordsCount();
    this.globalService.setKeywordsRecordsCount();
    this.globalService.setRepositoryRecordsCount();
    this.globalService.setTestScriptsRecordsCount();
    this.globalService.setTestDataRecordsCount();
  }
}


