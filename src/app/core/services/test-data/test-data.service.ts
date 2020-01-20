import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TestData } from '../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {

  public apiUrl:string;
  
  constructor(private httpClient: HttpClient){
    this.apiUrl = environment.APIURL;
  }

  getTestData(): Observable<TestData[]>{
    return this.httpClient.get(this.apiUrl+'/TestData/GetTestAllData')
               .pipe(
                 map(res=>res as TestData[]),
                 catchError(this.errorHandle)
               );
  }
  
  errorHandle(error:Response){
    console.log(error);
    return throwError(error);
  }
}
