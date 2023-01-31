import { AuthService } from './../common/services/auth/auth.service';
import { UserInfo } from './../common/interfaces/auth.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userInfo: UserInfo = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(userInfo: UserInfo){
    this.authService.login(userInfo);

  }
}
