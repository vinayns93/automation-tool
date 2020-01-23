import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ModuleController, TestController, BrowserController } from '../../models';
import { map, catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public apiUrl:string;
  public userID: string;
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService,
              public globalService: GlobalService){
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
         this.toastr.success("Module Controller instance has been Added Successfully !");
         },
         error  => {
         this.toastr.error("Error while creating Module Controller instance !");
         }
     );
   }

   addTestController(testControllerObj: TestController){
       return this.httpClient.post(this.apiUrl+'/Feature/AddTestController',testControllerObj)
       .subscribe(
         data  => {
           this.toastr.success("Test Controller instance has been Added Successfully !");
           },
           error  => {
           this.toastr.error("Error while creating Test Controller instance !");
           }
       );
    }

    addBrowserController(browserController: BrowserController){    
       return this.httpClient.post(this.apiUrl+'/Feature/AddBrowserController', browserController)
       .subscribe(
         data  => {
           this.toastr.success("Browser Controller record has been Added Successfully !");
           },
           error  => {
           this.toastr.error("Error while creating Browser Controller instance !");
           }
       );
    }

    updateModuleController(id:number,moduleController:ModuleController){
      moduleController.userId = Number(this.userID);
     return this.httpClient.put(this.apiUrl+'/Feature/UpdateModuleController/'+id,moduleController)
     .subscribe(
       data  => {
         this.toastr.warning("Module Controller data updated Successfully !");
         this.globalService.updateRecordsModified();
         },
         error  => {
         this.toastr.error("Error while updating Module Controller instance !");
         }
     );
   }

   updateTestController(id:number,testController:TestController){
    testController.userId = Number(this.userID);
       return this.httpClient.put(this.apiUrl+'/Feature/UpdateTestController/'+id,testController)
       .subscribe(
         data  => {
           this.toastr.warning("Module Controller instance (ID: "+id+") has been Updated Successfully !");
           this.globalService.updateRecordsModified();
           },
           error  => {
           this.toastr.error("Error while Updating Test Controller insatnce !");
           }
       );
     }

     updateBrowserController(id:number,browserController:BrowserController){
      browserController.userId = Number(this.userID);
       return this.httpClient.put(this.apiUrl+'/Feature/UpdateBrowserController/'+id,browserController)
       .subscribe(
         data  => {
           this.toastr.warning("Browser Controller instance (ID: "+id+") has been Updated Successfully !");
           this.globalService.updateRecordsModified();
           },
           error  => {
           this.toastr.error("Error while Updating Browser Controller instance !");
           }
       );
     }
   deleteModuleController(id:number){
    this.getModuleController(id)
    .subscribe((response) => {
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteModuleController/'+id+'/'+this.userID)
     .subscribe(
       data  => {
         this.toastr.warning("Module Controller instance (ID: "+id+") has been deleted Successfully !");
         },
         error  => {
         this.toastr.error("Error while Deleting Module Controller instance (ID: "+id+") ");
         }
     );
    });
     
   }

   deleteTestController(id:number){
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController/'+id+'/'+this.userID)
       .subscribe(
         data  => {
           this.toastr.warning("Test Controller instance (ID: "+id+") Deleted Successfully !");
           },
           error  => {
           this.toastr.error("Error while Deleting Test Controller instance (ID: "+id+")");
           }
       );
     }

     deleteBrowserController(id:number){
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteBrowserController/'+id+'/'+this.userID)
       .subscribe(
         data  => {
           this.toastr.warning("Browser Controller instance (ID: "+id+") deleted Successfully !");
           },
           error  => {
           this.toastr.error("Error while Deleting Browser Controller instance !");
           console.log(error);
           }
       );
     }

  errorHandle(error:Response){
    console.log(error);
    return throwError(error);
  }
}
