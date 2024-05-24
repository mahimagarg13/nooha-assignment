import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login(username: string, password: string): void {
    // Perform authentication logic here, e.g., validate username and password
    // For simplicity, I'm just setting isAuthenticated to true
    this.isAuthenticated = true;
  }

  logout(): void {
    // Perform logout logic here
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
