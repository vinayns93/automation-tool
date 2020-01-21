import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Repository } from '../../models/repository/repository.model';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public apiUrl: string;
  public userID: number;


  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
    this.apiUrl = environment.APIURL;
    this.userID = Number(localStorage.getItem('currentUser'));
  }

  getRepositories(): Observable<Repository[]> {
    return this.httpClient.get(this.apiUrl + '/Repository/GetAllRepository')
      .pipe(
        map(res => res as Repository[]),
        catchError(this.errorHandle)
      );
  }

  getRepository(id: number, userId: number): Observable<Repository> {
    return this.httpClient.get(this.apiUrl + '/Repository/GetRepositoryById/' + id + '/' + this.userID)
      .pipe(
        map(res => res as Repository),
        catchError(this.errorHandle)
      );
  }

  addRepository(repo: Repository) {
    return this.httpClient.post(this.apiUrl + '/Repository/AddRepository', repo)
      .subscribe(
        data => {
          console.log("POST Request is successful ", data);
          this.toastr.success("Repository instance created successfully !");
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  updateRepository(id: number, repo: Repository) {
    return this.httpClient.put(this.apiUrl + '/Repository/UpdateRepository/' + id, repo)
      .subscribe(
        data => {
          console.log("PUT Request is successful ", data);
          this.toastr.success("Repository updated Successfully !");
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  deleteRepository(id: number) {
    return this.httpClient.delete(this.apiUrl + '/Repository/DeleteRepository/' + id+ '/'+this.userID)
      .subscribe(
        data => {
          console.log("DELETE Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  errorHandle(error: Response) {
    console.log(error);
    return throwError(error);
  }
}
