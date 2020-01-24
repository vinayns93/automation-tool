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
  
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.APIURL;
    this.activeUsers = 0;
    this.recordsModified = 0;
    this.feedData.push("No Activity Recorded");
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
