import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { TestScript } from '../models/testscript.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestScriptsService {
  public apiUrl:string;
  
   constructor(private httpClient: HttpClient){
    this.apiUrl = environment.APIURL;
   }
   
   getTestScripts():Observable<TestScript[]>{
     return this.httpClient.get(this.apiUrl+'/TestScripts/GetScripts')
                .pipe(
                  map(res=>res as TestScript[]),
                  catchError(this.errorHandle)
                );
   }

   getTestScript(id:number):Observable<TestScript>{
    return this.httpClient.get(this.apiUrl+'/TestScripts/GetScript/'+id)
    .pipe(
      map(res=>res as TestScript),
      catchError(this.errorHandle)
    );
   }
    
   addTestScript(script:TestScript){
       return this.httpClient.post(this.apiUrl+'/TestScripts/AddScript',script)
       .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    updateTestScript(id:number,script:TestScript){
      return this.httpClient.put(this.apiUrl+'/TestScripts/UpdateScript/'+id,script)
      .subscribe(
        data  => {
          console.log("PUT Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    deleteTestScript(id:number){
      return this.httpClient.delete(this.apiUrl+'/TestScripts/DeleteScript/'+id)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

   errorHandle(error:Response){
     console.log(error);
     return throwError(error);
   }
}
