import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ModuleController, TestController, BrowserController } from '../../models';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public apiUrl:string;
  public userID: string;
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService){
   this.apiUrl = environment.APIURL;
   this.userID = localStorage.getItem('currentUser');
  }
  
  getAllModuleController():Observable<ModuleController[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllModuleController/'+this.userID)
               .pipe(
                 map(res=>res as ModuleController[]),
                 catchError(this.errorHandle)
               );
  }

  getAllTestController():Observable<TestController[]>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetAllTestController/'+this.userID)
              .pipe(
                map(res=>res as TestController[]),
                catchError(this.errorHandle)
              );
 }
 getAllBrowserController():Observable<BrowserController[]>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetAllBrowserController/')
              .pipe(
                map(res=> res as BrowserController[]),
                catchError(this.errorHandle)
              );
 }

 getModuleController(id:number):Observable<ModuleController>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetModuleControllerById/'+id+'/'+this.userID)
   .pipe(
     map(res=>res as ModuleController),
     catchError(this.errorHandle)
   );
  }

  getTestController(id:number):Observable<TestController>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetTestControllerById/'+id+'/'+this.userID)
   .pipe(
     map(res=>res as TestController),
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
   
  addModuleController(moduleController: ModuleController){
      return this.httpClient.post(this.apiUrl+'/Feature/AddModuleController',moduleController)
      .subscribe(
       data  => {
         console.log("POST Request is successful ", data);
         this.toastr.success("Module Controller data added Successfully !");
         },
         error  => {
         console.log("Error", error);
         this.toastr.error("Error creating Module Controller instance !");
         }
     );
   }

   addTestController(testControllerObj: TestController){
       return this.httpClient.post(this.apiUrl+'/Feature/AddTestController',testControllerObj)
       .subscribe(
         data  => {
           console.log("POST Request is successful ", data);
           this.toastr.success("Test Controller data added Successfully !");
           },
           error  => {
           console.log("Error", error);
           this.toastr.error("Error creating Test Controller instance !");
           }
       );
    }

    addBrowserController(browserController: BrowserController){    
       return this.httpClient.post(this.apiUrl+'/Feature/AddBrowserController', browserController)
       .subscribe(
         data  => {
           console.log("POST Request is successful ", data);
           this.toastr.success("Browser Controller record has been Added Successfully !");
           },
           error  => {
           console.log("Error", error);
           this.toastr.error("Error creating Browser Controller record !");
           }
       );
    }

    updateModuleController(id:number,moduleController:ModuleController){
      moduleController.userId = Number(this.userID);
     return this.httpClient.put(this.apiUrl+'/Feature/UpdateModuleController/'+id,moduleController)
     .subscribe(
       data  => {
         console.log("PUT Request is successful ", data);
         this.toastr.warning("Module Controller data updated Successfully !");
         },
         error  => {
         console.log("Error", error);
         this.toastr.error("Error in updating Module Controller data !");
         }
     );
   }

   updateTestController(id:number,testController:TestController){
    testController.userId = Number(this.userID);
       return this.httpClient.put(this.apiUrl+'/Feature/UpdateTestController/'+id,testController)
       .subscribe(
         data  => {
           console.log("PUT Request is successful ", data);
           this.toastr.warning("Module Controller data updated Successfully !");
           },
           error  => {
           console.log("Error", error);
           this.toastr.error("Error in updating Test Controller data !");
           }
       );
     }

     updateBrowserController(id:number,browserController:BrowserController){
      browserController.userId = Number(this.userID);
       return this.httpClient.put(this.apiUrl+'/Feature/UpdateBrowserController/'+id,browserController)
       .subscribe(
         data  => {
           console.log("PUT Request is successful ", data);
           this.toastr.warning("Browser Controller record with ID: "+id+" updated Successfully !");
           },
           error  => {
           console.log("Error", error);
           this.toastr.error("Error in updating Browser Controller data !");
           }
       );
     }
   deleteModuleController(id:number){
    this.getModuleController(id)
    .subscribe((response) => {
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteModuleController/'+id+'/'+this.userID)
     .subscribe(
       data  => {
         console.log("DELETE Request is successful ", data);
         this.toastr.warning("Module Controller data deleted Successfully !");
         },
         error  => {
         console.log("Error", error);
         }
     );
    });
     
   }

   deleteTestController(id:number){
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController/'+id+'/'+this.userID)
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
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteBrowserController/'+id+'/'+this.userID)
       .subscribe(
         data  => {
           console.log("DELETE Request is successful ", data);
           this.toastr.warning("Browser Controller record ID: "+id+" deleted Successfully !");
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
