import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService} from '../services/alert.service';
import { AuthenticationService} from '../services/authentication.service';
import { AuthService } from '../core/services/auth/auth.service';
import { User } from '../core/models/user/user';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService
    ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    this.authService.logout();
  }
  get f() { return this.loginForm.controls; }
  onSubmit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    let user: User = new User();
    user.userName = this.loginForm.controls["username"].value;
    user.password = this.loginForm.controls["password"].value;
    this.authService.login(user);
  }
  

}
