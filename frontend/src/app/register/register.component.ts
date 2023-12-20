import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private authService: AuthService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any) {

  

    this.registrationForm=this.formbuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    }
    )
  }

  getErrorMessage(controlName: string) {
    const control = this.registrationForm.get(controlName);
    return control?.hasError('required') ? 'This field is required' :
      control?.hasError('email') ? 'Not a valid email' :
        '';
  }
  
  registerUser(){
    if (this.registrationForm.valid) {
      let registeredUser = this.registrationForm.value;
      this.authService.registerUser(registeredUser);
      this.router.navigate(['login']);
    } else {
      this.registrationForm.markAllAsTouched();
    }
   
  }
}
