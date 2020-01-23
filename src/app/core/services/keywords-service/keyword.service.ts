import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Keywords } from '../../models/keywords/keyword.model';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '..';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  public apiUrl:string;
  public userID: string;
  
  
   constructor(private httpClient: HttpClient, private toastr: ToastrService,
    public globalService: GlobalService){
     this.apiUrl = environment.APIURL;
     this.userID = localStorage.getItem('currentUser');
   }
   
   getKeywords(): Observable<Keywords[]>{
     return this.httpClient.get(this.apiUrl+'/Keywords/GetAllKeywords')
                .pipe(
                  map(res=>res as Keywords[]),
                  catchError(this.errorHandle)
                );
   }

   getKeyword(id:number):Observable<Keywords>{
    return this.httpClient.get(this.apiUrl+'/Keywords/GetKeywordById/'+id+'/'+this.userID)
    .pipe(
      map(res=>res as Keywords),
      catchError(this.errorHandle)
    );
   }
    
   addKeyword(keyword:Keywords){
     keyword.userId = Number(this.userID);
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

    updateKeyword(id:number,keyword:Keywords){
      keyword.userId = Number(this.userID);
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

    deleteKeyword(id:number){
      return this.httpClient.delete(this.apiUrl+'/Keywords/DeleteKeyword/'+id+'/'+this.userID)
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

   errorHandle(error:Response){
     console.log(error);
     return throwError(error);
   }
}
