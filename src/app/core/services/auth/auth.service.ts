import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user/user';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    public apiUrl:string;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.apiUrl = environment.APIURL;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}

login(user: User) {
  
    return this.http.post(this.apiUrl+'/Auth/Login',user)
      .subscribe((userID) => {
        if(userID > 0){
          localStorage.setItem('currentUser', JSON.stringify(userID));
          this.currentUserSubject.next(user);
          this.router.navigate(['admin/repository/']);
        }
        else{
          this.toastr.error("Please enter Valid Credentials !");
        }
      },
      error => {
        console.log("Error: "+error)
      });
        // .pipe(map(validUser => {
        //     // login successful if there's a jwt token in the response
        //     // if (user && user.token) {
        //       if (validUser) {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify(validUser));
        //         this.currentUserSubject.next(validUser);
        //     }
        //     return validUser;
        // }));
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
}

}
