import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  async registerUser(user: User) {
    let response = await fetch(' http://localhost:1850/user/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);
  }

  async loginUser(user: User) {
    let response = await fetch('', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);
  }
}

