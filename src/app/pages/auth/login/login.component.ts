import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  // user: SocialUser;
  // loggedIn: boolean;
  // constructor(private authService: SocialAuthService) {
  // }
  // ngOnInit(): void {

  //   this.authService.authState.subscribe(user => {
  //     this.user = user;
  //     this.loggedIn = user != null;
  //   });


  // }
  // handleCredentialResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }

  // signOut(): void {
  //   this.authService.signOut();
  // }
}
