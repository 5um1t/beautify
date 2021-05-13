import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass'],
})
export class LoginPageComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
