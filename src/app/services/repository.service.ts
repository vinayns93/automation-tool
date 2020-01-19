import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { TestScript } from '../models/testscript.model';
import { Repository } from '../models/repository.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public apiUrl:string;

  
   constructor(private httpClient: HttpClient){
    this.apiUrl = environment.APIURL;
   }
   
   getRepositories():Observable<Repository[]>{
     return this.httpClient.get(this.apiUrl+'/api/Repository/GetAllRepository')
                .pipe(
                  map(res=>res as Repository[]),
                  catchError(this.errorHandle)
                );
   }

   getRepository(id:number):Observable<Repository>{
    return this.httpClient.get(this.apiUrl+'/api/Repository/GetRepositoryById/'+id)
    .pipe(
      map(res=>res as Repository),
      catchError(this.errorHandle)
    );
   }
    
   addRepository(repo:Repository){
       return this.httpClient.post(this.apiUrl+'/api/Repository/AddRepository',repo)
       .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    updateRepository(id:number,repo:Repository){
      return this.httpClient.put(this.apiUrl+'/api/Repository/UpdateRepository/'+id,repo)
      .subscribe(
        data  => {
          console.log("PUT Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    deleteRepository(id:number){
      return this.httpClient.delete(this.apiUrl+'/api/Repository/DeleteRepository/'+id)
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
