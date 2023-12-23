import { Component } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[SocialAuthService]
})
export class LoginComponent {

  user: SocialUser;
  loggedIn: boolean;
  constructor(private authService: SocialAuthService) {
  }
  ngOnInit(): void {

    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
    });


  }
  handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
