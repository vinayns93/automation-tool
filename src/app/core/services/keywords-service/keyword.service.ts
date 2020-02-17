import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Keywords } from '../../models/keywords/keyword.model';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '..';
import { User } from '../../models/user/user';
import { RoleConstants } from '../../constants/roleConstants';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  public apiUrl:string;
  public user: User;
  public roleConstants = RoleConstants;
  
   constructor(private httpClient: HttpClient, private toastr: ToastrService,
    public globalService: GlobalService){
     this.apiUrl = environment.APIURL;
     this.user = JSON.parse(localStorage.getItem('currentUser'));
   }
   
   getKeywords(): Observable<Keywords[]>{
     if(this.user.roleId == this.roleConstants[0].RoleID){
     return this.httpClient.get(this.apiUrl+'/Keywords/GetAllKeywordsAdmin/'+this.user.userId)
                .pipe(
                  map(res=>res as Keywords[]),
                  catchError(this.errorHandle)
                );
    }
    else{
      return this.httpClient.get(this.apiUrl+'/Keywords/GetAllKeywords/'+this.user.userId)
                .pipe(
                  map(res=>res as Keywords[]),
                  catchError(this.errorHandle)
                );
    }
   }

   getKeyword(id:number):Observable<Keywords>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/Keywords/GetKeywordByIdAdmin/'+id+'/'+this.user.userId)
      .pipe(
        map(res=>res as Keywords),
        catchError(this.errorHandle)
      );
     }
     else{
    return this.httpClient.get(this.apiUrl+'/Keywords/GetKeywordById/'+id+'/'+this.user.userId)
    .pipe(
      map(res=>res as Keywords),
      catchError(this.errorHandle)
    );
     }
   }
    
   addKeyword(keyword:Keywords){
    keyword.userId = Number(this.user.userId);
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.post(this.apiUrl+'/Keywords/AddKeywordAdmin',keyword)
      .subscribe(
       data  => {
         console.log("POST Request is successful");
         console.log(data);
         this.toastr.success("Keywords instance created successfully !");
         },
         error  => {
         console.log("Error", error);
         }
     );
     }
     else{
       return this.httpClient.post(this.apiUrl+'/Keywords/AddKeyword',keyword)
       .subscribe(
        data  => {
          console.log("POST Request is successful");
          console.log(data);
          this.toastr.success("Keywords instance created successfully !");
          },
          error  => {
          console.log("Error", error);
          }
      );
        }
    }

    updateKeyword(id:number,keyword:Keywords){
      keyword.userId = Number(this.user.userId);
      if(this.user.roleId == this.roleConstants[0].RoleID){
        return this.httpClient.put(this.apiUrl+'/Keywords/UpdateKeywordAdmin/'+id,keyword)
      .subscribe(
        data  => {
          this.toastr.success("The Keyword has been updated successfully");
          this.globalService.updateRecordsModified();
          },
          error  => {
          console.log("Error", error);
          }
      );
       }
       else{
      return this.httpClient.put(this.apiUrl+'/Keywords/UpdateKeyword/'+id,keyword)
      .subscribe(
        data  => {
          this.toastr.success("The Keyword has been updated successfully");
          this.globalService.updateRecordsModified();
          },
          error  => {
          console.log("Error", error);
          }
      );
        }
    }

    deleteKeyword(id:number){
      if(this.user.roleId == this.roleConstants[0].RoleID){
        return this.httpClient.delete(this.apiUrl+'/Keywords/DeleteKeywordAdmin/'+id+'/'+this.user.userId)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          this.toastr.warning("Keywords record has been Deleted !")
          },
          error  => {
          console.log("Error", error);
          }
      );
       }
       else{
      return this.httpClient.delete(this.apiUrl+'/Keywords/DeleteKeyword/'+id+'/'+this.user.userId)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          this.toastr.warning("Keywords record has been Deleted !")
          },
          error  => {
          console.log("Error", error);
          }
      );
        }
    }
    getAllFunctionNames(): Observable<string[]> {
      return this.httpClient.get(this.apiUrl + '/Keywords/GetAllFunctionNames')
        .pipe(
          map(res => res as string[]),
          catchError(this.errorHandle)
        );
    }
   errorHandle(error:Response){
     console.log(error);
     return throwError(error);
   }
}
