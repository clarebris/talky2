import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  showRegistrationForm: boolean = false;

  toggleRegistrationForm() {
    this.showRegistrationForm = !this.showRegistrationForm;
  }

  submitRegistration() {
    // Handle the registration form submission logic here
    console.log('Submitting registration form...');
  }

}
