import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { TestScript } from '../models/testscript.model';
import { TestController1 } from '../models/testcontroller1.model';
import { TestController2 } from '../models/testcontrolller2.model';
import { TestController3 } from '../models/testcontroller3.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestControllerService {
  public apiUrl:string;
  
   constructor(private httpClient: HttpClient){
    this.apiUrl = environment.APIURL;
   }
   
   getAllController1():Observable<TestController1[]>{
     return this.httpClient.get(this.apiUrl+'/Feature/GetAllController1')
                .pipe(
                  map(res=>res as TestController1[]),
                  catchError(this.errorHandle)
                );
   }

   getAllController2():Observable<TestController2[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllController2')
               .pipe(
                 map(res=>res as TestController2[]),
                 catchError(this.errorHandle)
               );
  }
  getAllController3():Observable<TestController3[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllController3')
               .pipe(
                 map(res=> res as TestController3[]),
                 catchError(this.errorHandle)
               );
  }

   getController1(id:number):Observable<TestController1>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetController1ById/'+id)
    .pipe(
      map(res=>res as TestController1),
      catchError(this.errorHandle)
    );
   }

   getController2(id:number):Observable<TestController2>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetController2ById/'+id)
    .pipe(
      map(res=>res as TestController2),
      catchError(this.errorHandle)
    );
   }

   getController3(id:number):Observable<TestController3>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetController3ById/'+id)
    .pipe(
      map(res=>res as TestController3),
      catchError(this.errorHandle)
    );
   }
    
   addController1(testcontroller1:TestController1){
       return this.httpClient.post(this.apiUrl+'/Feature/PostController1',testcontroller1)
       .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    addController2(testcontroller2:TestController2){
        return this.httpClient.post(this.apiUrl+'/Feature/PostController2',testcontroller2)
        .subscribe(
          data  => {
            console.log("POST Request is successful ", data);
            },
            error  => {
            console.log("Error", error);
            }
        );
     }

     addController3(testcontroller3:TestController3){
        return this.httpClient.post(this.apiUrl+'/Feature/PostController3',testcontroller3)
        .subscribe(
          data  => {
            console.log("POST Request is successful ", data);
            },
            error  => {
            console.log("Error", error);
            }
        );
     }

    updateTestController1(id:number,testcontroller1:TestController1){
      return this.httpClient.put(this.apiUrl+'/Feature/PutController1/'+id,testcontroller1)
      .subscribe(
        data  => {
          console.log("PUT Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    updateTestController2(id:number,testcontroller2:TestController2){
        return this.httpClient.put(this.apiUrl+'/Feature/PutController2/'+id,testcontroller2)
        .subscribe(
          data  => {
            console.log("PUT Request is successful ", data);
            },
            error  => {
            console.log("Error", error);
            }
        );
      }

      updateTestController3(id:number,testcontroller3:TestController3){
        console.log(testcontroller3);
        console.log(this.apiUrl+'/Feature/PutController3/'+id);
        return this.httpClient.put(this.apiUrl+'/Feature/PutController3/'+id,testcontroller3)
        .subscribe(
          data  => {
            console.log("PUT Request is successful ", data);
            },
            error  => {
            console.log("Error", error);
            }
        );
      }
    deleteTestController1(id:number){
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController1/'+id)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    deleteTestController2(id:number){
        return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController2/'+id)
        .subscribe(
          data  => {
            console.log("DELETE Request is successful ", data);
            },
            error  => {
            console.log("Error", error);
            }
        );
      }

      deleteTestController3(id:number){
        return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController3/'+id)
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
