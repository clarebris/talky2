import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUserForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {

  

    this.loginUserForm=this.formbuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    }
    )
  }

  getErrorMessage(controlName: string) {
    const control = this.loginUserForm.get(controlName);
    return control?.hasError('required') ? 'This field is required' :
      control?.hasError('email') ? 'Not a valid email' :
        '';
  }
  
  loginUser(){
    if (this.loginUserForm.valid) {
      let loggedUser = this.loginUserForm.value;
      this.authService.registerUser(loggedUser);
      this.router.navigate(['home']);
    } else {
      this.loginUserForm.markAllAsTouched();
    }
   
  }
}


