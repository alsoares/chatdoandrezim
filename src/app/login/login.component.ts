import { Component } from '@angular/core';
import { AngularProvider} from '../providers/angularProvider';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(public angularProvider: AngularProvider, private router: Router) { }

  login(){
    this.angularProvider.loginComGoogle().then((data) =>{
      this.router.navigate(['']);
   });
  }



}
