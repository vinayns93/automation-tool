import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public apiUrl:string;
  opened: boolean = false;
  currentTabName: string;

  public activeUsers;
  public recordsModified;
  public feedData: string[] = [];
  currentUser: User;
  featureRecordsCount: number;
  keywordRecordsCount: number;
  repositoryRecordsCount: number;
  testScriptsRecordsCount: number;
  testDataRecordsCount: number;
  
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.APIURL;
    this.activeUsers = 0;
    this.recordsModified = 0;
    this.feedData.push("No Activity Recorded");
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.featureRecordsCount = 0;
    this.keywordRecordsCount = 0;
    this.repositoryRecordsCount = 0;
    this.testScriptsRecordsCount = 0;
    this.testDataRecordsCount = 0;
  }


  updateActiveUsers(){
    var self = this;
    self.getActiveUsers()
      .subscribe((users) => {
        if(users)
          self.activeUsers = users;
      });
  }

  updateRecordsModified(){
    var self = this;
    self.getRecordsModifiedCount()
      .subscribe((records) => {
        if(records)
          self.recordsModified = records;
      });
  }

  updateLatestFeeds(){
    var self = this;
    self.getLatestFeeds()
      .subscribe((feeds) => {
        if(feeds.length > 0)
          self.feedData = feeds.splice(-1, 3);
        else  
          self.feedData.push("No Activity Recorded");
      });
  }

  getActiveUsers():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Dashboard/GetActiveUsers/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getRecordsModifiedCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Dashboard/RecordsModifiedCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getLatestFeeds():Observable<string[]>{
    return this.httpClient.get(this.apiUrl+'/Dashboard/GetLatestFeeds/')
               .pipe(
                 map(res=>res as string[]),
                 catchError(this.errorHandle)
               );
  }

  setFeatureRecordsCount(){
    let moduleCount: number = 0;
    let testCount: number = 0;
    let browserCount: number = 0;
    this.getModuleRecordsCount()
      .subscribe((moduleCountResult) => {
        moduleCount = moduleCountResult;
        this.getBrowserRecordsCount()
          .subscribe((browserCountResult) => {
            browserCount = browserCountResult;
            this.getTestRecordsCount()
              .subscribe((testCountResult) => {
                testCount = testCountResult;
                this.featureRecordsCount = moduleCountResult + browserCountResult + testCountResult
              });
          });
      });
  }

  setKeywordsRecordsCount(){
    this.getKeywordsCount()
      .subscribe((keywordsCountResult) => {
        this.keywordRecordsCount = keywordsCountResult;
      });
  }

  setRepositoryRecordsCount(){
    this.getRepositoryCount()
      .subscribe((repositoryCountResult) => {
        this.repositoryRecordsCount = repositoryCountResult;
      });
  }

  setTestDataRecordsCount(){
    this.getTestDataCount()
      .subscribe((testDataCountResult) => {
        this.testDataRecordsCount = testDataCountResult;
      });
  }

  setTestScriptsRecordsCount(){
    this.getTestScriptsCount()
      .subscribe((testScriptsCountResult) => {
        this.testScriptsRecordsCount = testScriptsCountResult;
      });
  }

  getModuleRecordsCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetModuleRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getTestRecordsCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetTestControllerRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getBrowserRecordsCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetBrowserRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getKeywordsCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Keywords/GetRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getRepositoryCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/Repository/GetRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getTestDataCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/TestData/GetRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  getTestScriptsCount():Observable<number>{
    return this.httpClient.get(this.apiUrl+'/TestScripts/GetRecordsCount/')
               .pipe(
                 map(res=>res as number),
                 catchError(this.errorHandle)
               );
  }

  SetCurrentTab(tabName){
    this.currentTabName = tabName;
  }

  GetCurrentTab(): string {
    return this.currentTabName;
  }

  errorHandle(error:Response){
    console.log(error);
    return throwError(error);
  }
}
