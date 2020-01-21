import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public apiUrl:string;

  opened: boolean = false;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.APIURL;
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

  errorHandle(error:Response){
    console.log(error);
    return throwError(error);
  }
}
