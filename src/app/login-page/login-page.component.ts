import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  constructor(public auth: AngularFireAuth, private router: Router) {}
  public ngOnInit() {}
  public login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((user) => {
        this.router.navigateByUrl('/home');
      });
  }
}
