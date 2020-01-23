import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService} from '../core/services/shared/alert.service';
import { AuthenticationService} from '../core/services/auth/authentication.service';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    loading = false;
    submitted = false;
    returnUrl: string;
    username: any;
    password: any;

    loginForm: FormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
    ) { }

  ngOnInit() {

    
    this.authService.logout();
  }
  onSubmit(){
    this.submitted = true;

    this.username = this.loginForm.get('username').value;
    this.password = this.loginForm.get('password').value;
    this.loading = true;
    let user: User = new User();
    user.userName = this.username;
    user.password = this.password;
    this.authService.login(user);
  }
  

}
