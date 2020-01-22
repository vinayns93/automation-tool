import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { TestScript } from '../../models';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestScriptsService {
  public apiUrl:string;
  public userID: string;
  
   constructor(private httpClient: HttpClient, private toastr: ToastrService){
    this.apiUrl = environment.APIURL;
    this.userID = localStorage.getItem('currentUser');
   }
   
   getTestScripts():Observable<TestScript[]>{
     return this.httpClient.get(this.apiUrl+'/TestScripts/GetScripts')
                .pipe(
                  map(res=>res as TestScript[]),
                  catchError(this.errorHandle)
                );
   }

   getTestScript(id:number):Observable<TestScript>{
    return this.httpClient.get(this.apiUrl+'/TestScripts/GetScript/'+id+'/'+this.userID)
    .pipe(
      map(res=>res as TestScript),
      catchError(this.errorHandle)
    );
   }
    
   addTestScript(script:TestScript){
        script.userId = Number(this.userID);
       return this.httpClient.post(this.apiUrl+'/TestScripts/AddScript',script)
       .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
          this.toastr.success("TestScript instance created successfully !");
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
          this.toastr.warning("Test Script updation is successfull");
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    deleteTestScript(id:number){
      return this.httpClient.delete(this.apiUrl+'/TestScripts/DeleteScript/'+id+'/'+this.userID)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          this.toastr.warning("testscript Delete has been successfull")
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
