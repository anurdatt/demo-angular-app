import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthModule } from './auth.module';
import { OktaAuth } from '@okta/okta-auth-js';
import { OktaAuthStateService, OKTA_AUTH } from '@okta/okta-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo-angular-app';

  constructor(
    @Inject(OKTA_AUTH) public oktaAuth: OktaAuth,
    public authStateService: OktaAuthStateService
  ) {}

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }
}
