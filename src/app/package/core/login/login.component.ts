import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { isNotEmptyString } from '../../core/utils/shared-utils';
import { OktaAuthService } from '../okta-auth/okta-auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(    
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    private dialog: MatDialog,
    private okta: OktaAuthService) {    

}

  ngOnInit(): void {
    this.okta.handleAuthentication();
    //this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  loginData(): void {
    console.log('loginForm',this.loginForm.value.username);
    console.log('loginForm',this.loginForm.value.password);
    if(isNotEmptyString(this.loginForm.value.username)&&isNotEmptyString(this.loginForm.value.password)){
      this.router.navigate(["main/launcher"]);
    }    
  }

}
