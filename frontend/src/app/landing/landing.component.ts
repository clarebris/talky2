import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  // showRegistrationForm: boolean = false;
  // showLoginForm: boolean = false;

  // toggleRegistrationForm() {
  //   this.showRegistrationForm = !this.showRegistrationForm;
  // }
  // toggleLoginForm() {
  //   this.showLoginForm = !this.showRegistrationForm;
  // }

  // submitRegistration() {
  //   // Handle the registration form submission logic here
  //   console.log('Submitting registration form...');
  // }
  // submitLogin() {
  //   // Handle the registration form submission logic here
  //   console.log('Submitting login form...');
  // }

  constructor(public dialog: MatDialog) {}

  openModal(): void {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '400px',
      data: { title: 'Modal Title', content: 'Modal Content' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  loginModal(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px',
      data: { title: 'Modal Title', content: 'Modal Content' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
