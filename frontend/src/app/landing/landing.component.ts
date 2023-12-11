import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  showRegistrationForm: boolean = false;
  showLoginForm: boolean = false;

  toggleRegistrationForm() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }
  toggleLoginForm() {
    this.showLoginForm = !this.showRegistrationForm;
  }

  submitRegistration() {
    // Handle the registration form submission logic here
    console.log('Submitting registration form...');
  }
  submitLogin() {
    // Handle the registration form submission logic here
    console.log('Submitting login form...');
  }


}
