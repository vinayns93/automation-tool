import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { TestScript } from '../../models';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '..';
import { User } from '../../models/user/user';
import { RoleConstants } from '../../constants/roleConstants';

@Injectable({
  providedIn: 'root'
})
export class TestScriptsService {

  public apiUrl:string;
  public user: User;
  public roleConstants = RoleConstants;

   constructor(private httpClient: HttpClient, private toastr: ToastrService,
    public globalService: GlobalService){
    this.apiUrl = environment.APIURL;
    this.user = (JSON.parse(localStorage.getItem('currentUser'))
    );
   }


   getAllTestScriptNames(): Observable<any[]>{
    return this.httpClient.get(this.apiUrl+'/TestScripts/GetAllTestScriptName')
               .pipe(
                 map(res=>res as any[]),
                 catchError(this.errorHandle)
               );
  }
   getTestScripts():Observable<TestScript[]>{
     if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/TestScripts/GetScriptsAdmin'+'/' + this.user.userId)
                .pipe(
                  map(res=>res as TestScript[]),
                  catchError(this.errorHandle)
                );
      }
      else{
       return this.httpClient.get(this.apiUrl+'/TestScripts/GetScripts'+'/' + this.user.userId)
                .pipe(
                  map(res=>res as TestScript[]),
                  catchError(this.errorHandle)
                );
      }
   }

   getTestScript(id:number):Observable<TestScript>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/TestScripts/GetScriptAdmin/'+id+'/'+this.user.userId)
      .pipe(
        map(res=>res as TestScript),
        catchError(this.errorHandle)
      );
      }
      else{
    return this.httpClient.get(this.apiUrl+'/TestScripts/GetScript/'+id+'/'+this.user.userId)
    .pipe(
      map(res=>res as TestScript),
      catchError(this.errorHandle)
    );
      }
   }

   addTestScript(script:TestScript){
        script.userId = Number(this.user.userId);
        if(this.user.roleId == this.roleConstants[0].RoleID){
          return this.httpClient.post(this.apiUrl+'/TestScripts/AddScriptAdmin',script)
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
          else{
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
    }

    updateTestScript(id:number,script:TestScript){

      script.userId = Number(this.user.userId);
      if(this.user.roleId == this.roleConstants[0].RoleID){
        return this.httpClient.put(this.apiUrl+'/TestScripts/UpdateScriptAdmin/'+id,script)
      .subscribe(
        data  => {
          this.toastr.warning("Test Script updation is successfull");
          this.globalService.getRecordsModifiedCount();
          },
          error  => {
          console.log("Error", error);
          }
      );
        }
        else{

      return this.httpClient.put(this.apiUrl+'/TestScripts/UpdateScript/'+id,script)
      .subscribe(
        data  => {
          this.toastr.warning("Test Script updation is successfull");
          this.globalService.getRecordsModifiedCount();
          },
          error  => {
          console.log("Error", error);
          }
      );
        }
    }

    deleteTestScript(id:number){
      if(this.user.roleId == this.roleConstants[0].RoleID){
        return this.httpClient.delete(this.apiUrl+'/TestScripts/DeleteScriptAdmin/'+id+'/'+this.user.userId)
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
        else{

      return this.httpClient.delete(this.apiUrl+'/TestScripts/DeleteScript/'+id+'/'+this.user.userId)
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
    }

   errorHandle(error:Response){
     console.log(error);
     return throwError(error);
   }
}
