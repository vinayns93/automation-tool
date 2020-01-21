import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { ModuleController, TestController, BrowserController } from '../../models';
import { map, catchError } from 'rxjs/operators';
import { TestController1 } from '../../../models/testcontroller1.model';
import { TestController2 } from '../../../models/testcontroller2.model';
import { formatDate } from '@angular/common';
import { TestController3 } from '../../../models/testcontroller3.model';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  public apiUrl:string;
  public userID: number;
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService){
   this.apiUrl = environment.APIURL;
   this.userID = Number(localStorage.getItem('currentUser'));
  }
  
  getAllModuleController():Observable<ModuleController[]>{
    return this.httpClient.get(this.apiUrl+'/Feature/GetAllModuleController/'+2)
               .pipe(
                 map(res=>res as ModuleController[]),
                 catchError(this.errorHandle)
               );
  }

  getAllTestController():Observable<TestController[]>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetAllTestController/'+2)
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
   return this.httpClient.get(this.apiUrl+'/Feature/GetModuleControllerById/'+id+'/'+2)
   .pipe(
     map(res=>res as ModuleController),
     catchError(this.errorHandle)
   );
  }

  getTestController(id:number):Observable<TestController>{
   return this.httpClient.get(this.apiUrl+'/Feature/GetTestControllerById/'+id+'/'+2)
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
   
  addModuleController(data: ModuleController){
    let moduleCntlObj: ModuleController = new ModuleController();
     moduleCntlObj.slno = 0;
     moduleCntlObj.moduleID = "Module1";
     moduleCntlObj.moduleSeqID = 111;
     moduleCntlObj.machineID = "MACHINE_VISHNU";
     moduleCntlObj.machineSequenceID = 222;
     moduleCntlObj.run = "YES";
     moduleCntlObj.isLocked = false;
     moduleCntlObj.lockedByUser = 0;
     moduleCntlObj.statusID = 0;
     moduleCntlObj.cudStatusID = 0;
     moduleCntlObj.createdOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
     moduleCntlObj.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
     moduleCntlObj.userId = this.userID;
      return this.httpClient.post(this.apiUrl+'/Feature/AddModuleController',moduleCntlObj)
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

   addTestController(data: TestController){
    let testCntlObj: TestController = new TestController();
    testCntlObj.sNo = 0;
    testCntlObj.featureID = "Feature1";
    testCntlObj.testCaseID = "TC_1";
    testCntlObj.run = "YES";
    testCntlObj.iterations = 0;
    testCntlObj.browsers = "Chrome";
    testCntlObj.sequenceID = 111;
    testCntlObj.testType = "Regression";
    testCntlObj.jirA_ID = "SN-5577";
    testCntlObj.stepsCount = 0;
    testCntlObj.testScriptName = "Script 1";
    testCntlObj.testScriptDescription = "Test Script Desc";
    testCntlObj.isLocked = false;
    testCntlObj.lockedByUser = 0;
    testCntlObj.statusID = 0;
    testCntlObj.cudStatusID = 0;
    testCntlObj.createdOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    testCntlObj.updatedOn = formatDate(new Date(), 'yyyy/MM/dd', 'en').toString();
    testCntlObj.userId = this.userID;
       return this.httpClient.post(this.apiUrl+'/Feature/AddTestController',testCntlObj)
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
     browserCntlObj.userId = this.userID;
       return this.httpClient.post(this.apiUrl+'/Feature/AddBrowserController', browserCntlObj)
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
      let obj: ModuleController = response;
      return this.httpClient.delete(this.apiUrl+'/Feature/DeleteModuleController/'+id)
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
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteTestController/'+id)
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
       return this.httpClient.delete(this.apiUrl+'/Feature/DeleteBrowserController/'+id+'/'+2)
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
