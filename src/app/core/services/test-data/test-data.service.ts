import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { TestData } from '../../models';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { User } from '../../models/user/user';

@Injectable({
  providedIn: 'root'
})
export class TestDataService {
  user: User;

  deleteTestData(id: any, tcid: any, iterations: any) {
    // this.getAllTestData()
    // .subscribe((result: TestData[])=>{
    //     if(result.length > 0){
    //       var newId: any = result.filter(tdItem => 
    //         (tdItem.tcid == tcid) && (tdItem.iterations != iterations))[0].id;
    //         if(newId){
    //           return this.httpClient.delete(this.apiUrl+'/Keywords/DeleteKeyword/'+id+'/'+2)
    //             .subscribe(
    //               data  => {
    //               this.toastr.warning("Test Data  (iteration 1) has been Deleted !");
    //               return this.httpClient.delete(this.apiUrl+'/Keywords/DeleteKeyword/'+newId+'/'+2)
    //                 .subscribe( data => {
    //                   this.toastr.warning("Test Data  (iteration 2) has been Deleted !");
    //                 });
    //               },
    //               error  => {
    //               console.log("Error", error);
    //             }
    //           );
    //         }
    //     }
    // });

    
  }

  public apiUrl:string;
  
  constructor(private httpClient: HttpClient, private toastr: ToastrService, private service: TestDataService){
    this.apiUrl = environment.APIURL;
    this.user = (JSON.parse(localStorage.getItem('currentUser'))
    )}
  
  addTestData(testdata:TestData){
    testdata.userId = Number(this.user.userId);
   return this.httpClient.post(this.apiUrl+'/TestScripts/AddTestData',testdata)
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
  getAllTestData(): Observable<TestData[]>{
    return this.httpClient.get(this.apiUrl+'/TestData/GetTestAllData')
               .pipe(
                 map(res=>res as TestData[]),
                 catchError(this.errorHandle)
               );
  }

  getTestData(id:number):Observable<TestData>{
    return this.httpClient.get(this.apiUrl+'/TestData/GetTestData/'+id+'/'+this.user.userId)
    .pipe(
      map(res=>res as TestData),
      catchError(this.errorHandle)
    );
   }
  
  errorHandle(error:Response){
    console.log(error);
    return throwError(error);
  }
}
