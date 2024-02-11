import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { OktaConfig, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { AuthInterceptor } from './shared/okta/auth.interceptor';

const authConfig = {
  issuer: 'https://dev-76789052.okta.com/oauth2/auselj90dmLJUlb5z5d7',
  redirectUri: window.location.origin + '/callback',
  clientId: '0oae3aix2gO5RuAev5d7',
  pkce: true,
};
const oktaAuth = new OktaAuth(authConfig);
const oktaConfig: OktaConfig = { oktaAuth };

@NgModule({
  declarations: [],
  imports: [OktaAuthModule.forRoot(oktaConfig), HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  exports: [OktaAuthModule, HttpClientModule],
})
export class AuthModule {}
