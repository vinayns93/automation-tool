import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { TestScript } from '../../models/test-scripts/test-scripts';
import { TestController1 } from '../../models/feature/module-controller/testcontroller1.model';
import { TestController2 } from '../../models/feature/test-controller/testcontroller2.model';
import { TestController3 } from '../../models/feature/browser-controller/testcontroller3.model';
import { environment } from '../../../../environments/environment';
import { BrowserController, ModuleController, TestController } from '../..';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestControllerService {
  public apiUrl:string;
  
   constructor(private httpClient: HttpClient, private toastr: ToastrService){
    this.apiUrl = environment.APIURL;
   }
   
   getAllModuleController():Observable<ModuleController[]>{
     return this.httpClient.get(this.apiUrl+'/Feature/GetAllModuleController/0')
                .pipe(
                  map(res=>res as ModuleController[]),
                  catchError(this.errorHandle)
                );
   }

   getAllTestController():Observable<TestController[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllTestController/0')
               .pipe(
                 map(res=>res as TestController[]),
                 catchError(this.errorHandle)
               );
  }
  getAllBrowserController():Observable<BrowserController[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllBrowserController')
               .pipe(
                 map(res=> res as BrowserController[]),
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

   getBrowserController(id:number):Observable<BrowserController>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetBrowserControllerById/'+id)
    .pipe(
      map(res=>res as BrowserController),
      catchError(this.errorHandle)
    );
   }
    
   addModuleController(data: ModuleController){
       return this.httpClient.post(this.apiUrl+'/Feature/AddModuleController',data)
       .subscribe(
        data  => {
          console.log("POST Request is successful ", data);
          this.toastr.success("Module Controller data added Successfully !");
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    addTestController(data: TestController){
        return this.httpClient.post(this.apiUrl+'/Feature/AddTestController',data)
        .subscribe(
          data  => {
            console.log("POST Request is successful ", data);
            this.toastr.success("Test Controller data added Successfully !");
            },
            error  => {
            console.log("Error", error);
            }
        );
     }

     addBrowserController(data: BrowserController){
      let browserCntlObj: BrowserController = new BrowserController();
      browserCntlObj.vmid = "Test 1";
      browserCntlObj.browser = "Chorme";
      browserCntlObj.exec = "YES";
      browserCntlObj.statusID = 0;
      browserCntlObj.cudStatusID = 0;
      browserCntlObj.isLocked = false;
      browserCntlObj.lockedByUser = 0;
      browserCntlObj.createdOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
      browserCntlObj.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
      browserCntlObj.userId = 123;
        return this.httpClient.post(this.apiUrl+'/Feature/AddBrowserController', browserCntlObj)
        .subscribe(
          data  => {
            console.log("POST Request is successful ", data);
            this.toastr.success("Browser Controller data added Successfully !");
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
          this.toastr.warning("Module Controller data updated Successfully !");
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
        console.log(this.apiUrl+'/Feature/UpdateBrowserController/'+id);
        return this.httpClient.put(this.apiUrl+'/Feature/UpdateBrowserController/'+id,testcontroller3)
        .subscribe(
          data  => {
            console.log("PUT Request is successful ", data);
            this.toastr.warning("Browser Controller data updated Successfully !");
            },
            error  => {
            console.log("Error", error);
            }
        );
      }
      deleteModuleController(id:number){
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController1/'+id)
      .subscribe(
        data  => {
          console.log("DELETE Request is successful ", data);
          this.toastr.warning("Module Controller data deleted Successfully !");
          },
          error  => {
          console.log("Error", error);
          }
      );
    }

    deleteTestController(id:number){
        return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController2/'+id)
        .subscribe(
          data  => {
            console.log("DELETE Request is successful ", data);
            this.toastr.warning("Test Controller data deleted Successfully !");
            },
            error  => {
            console.log("Error", error);
            }
        );
      }

      deleteBrowserController(id:number){
        return this.httpClient.delete(this.apiUrl+'/Feature/DeleteBrowserController/'+id+'/'+123)
        .subscribe(
          data  => {
            console.log("DELETE Request is successful ", data);
            this.toastr.warning("Browser Controller data deleted Successfully !");
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
