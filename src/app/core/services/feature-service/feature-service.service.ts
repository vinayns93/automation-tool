import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ModuleController, TestController, BrowserController } from '../../models';
import { map, catchError } from 'rxjs/operators';
import { GlobalService } from '../global/global.service';
import { User } from '../../models/user/user';
import { RoleConstants } from '../../constants/roleConstants';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public apiUrl:string;
  public user: User;
  public roleConstants = RoleConstants;
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService,
              public globalService: GlobalService){
   this.apiUrl = environment.APIURL;
   this.user = JSON.parse(localStorage.getItem('currentUser'));
  }
  
  getAllModuleController():Observable<ModuleController[]>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/Feature/GetAllModuleControllerAdmin/'+this.user.userId)
               .pipe(
                 map(res=>res as ModuleController[]),
                 catchError(this.errorHandle)
               );
    }
    else{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllModuleController/'+this.user.userId)
               .pipe(
                 map(res=>res as ModuleController[]),
                 catchError(this.errorHandle)
               );
    }
  }

  getAllTestController():Observable<TestController[]>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/Feature/GetAllTestControllerAdmin/'+this.user.userId)
              .pipe(
                map(res=>res as TestController[]),
                catchError(this.errorHandle)
              );
    }
    else{
   return this.httpClient.get(this.apiUrl+'/Feature/GetAllTestController/'+this.user.userId)
              .pipe(
                map(res=>res as TestController[]),
                catchError(this.errorHandle)
              );
    }
 }
 getAllBrowserController():Observable<BrowserController[]>{

   return this.httpClient.get(this.apiUrl+'/Feature/GetAllBrowserController/')
              .pipe(
                map(res=> res as BrowserController[]),
                catchError(this.errorHandle)
              );
 }

 getModuleController(id:number):Observable<ModuleController>{
  if(this.user.roleId == this.roleConstants[0].RoleID){
    return this.httpClient.get(this.apiUrl+'/Feature/GetModuleControllerByIdAdmin/'+id+'/'+this.user.userId)
   .pipe(
     map(res=>res as ModuleController),
     catchError(this.errorHandle)
   );
  }
  else{
   return this.httpClient.get(this.apiUrl+'/Feature/GetModuleControllerById/'+id+'/'+this.user.userId)
   .pipe(
     map(res=>res as ModuleController),
     catchError(this.errorHandle)
   );
  }
  }

  getTestController(id:number):Observable<TestController>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/Feature/GetTestControllerByIdAdmin/'+id+'/'+this.user.userId)
   .pipe(
     map(res=>res as TestController),
     catchError(this.errorHandle)
   );
    }
    else{
   return this.httpClient.get(this.apiUrl+'/Feature/GetTestControllerById/'+id+'/'+this.user.userId)
   .pipe(
     map(res=>res as TestController),
     catchError(this.errorHandle)
   );
  }
  }

  getBrowserController(id:number):Observable<BrowserController>{
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.get(this.apiUrl+'/Feature/GetBrowserControllerByIdAdmin/'+id)
      .pipe(
        map(res=>res as BrowserController),
        catchError(this.errorHandle)
      );
    }
    else{
   return this.httpClient.get(this.apiUrl+'/Feature/GetBrowserControllerById/'+id)
   .pipe(
     map(res=>res as BrowserController),
     catchError(this.errorHandle)
   );
    }
  }
   
  addModuleController(moduleController: ModuleController){
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.post(this.apiUrl+'/Feature/AddModuleControllerAdmin',moduleController)
      .subscribe(
       data  => {
         this.toastr.success("Module Controller instance has been Added Successfully !");
         },
         error  => {
         this.toastr.error("Error while creating Module Controller instance !");
         }
     );
    }
    else{
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
   }

   addTestController(testControllerObj: TestController){
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.post(this.apiUrl+'/Feature/AddTestControllerAdmin',testControllerObj)
       .subscribe(
         data  => {
           this.toastr.success("Test Controller instance has been Added Successfully !");
           },
           error  => {
           this.toastr.error("Error while creating Test Controller instance !");
           }
       );
    }
    else{
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
    }

    addBrowserController(browserController: BrowserController){    
      browserController.userId = this.user.userId;
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
      moduleController.userId = Number(this.user.userId);
      if(this.user.roleId == this.roleConstants[0].RoleID){
        return this.httpClient.put(this.apiUrl+'/Feature/UpdateModuleControllerAdmin/'+id,moduleController)
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
      else{
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
   }

   updateTestController(id:number,testController:TestController){
    testController.userId = Number(this.user.userId);
    if(this.user.roleId == this.roleConstants[0].RoleID){
      return this.httpClient.put(this.apiUrl+'/Feature/UpdateTestControllerAdmin/'+id,testController)
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
    else{
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
     }

     updateBrowserController(id:number,browserController:BrowserController){
      browserController.userId = Number(this.user.userId);
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
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteModuleController/'+id+'/'+this.user.userId)
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
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController/'+id+'/'+this.user.userId)
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
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteBrowserController/'+id+'/'+this.user.userId)
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

     getAllFeatureID(): Observable<string[]> {
      return this.httpClient.get(this.apiUrl + '/Feature/GetAllModuleID')
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
