import { Component } from '@angular/core';
import { AngularProvider} from './providers/angularProvider';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;

  constructor(private angularProvider: AngularProvider, private router: Router){

    this.angularProvider.afAuth.authState.subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
          this.angularProvider.nome = auth.displayName;
          this.angularProvider.email = auth.email;
          this.router.navigate(['']);
        }
      }
    );

  }

  logout(){
    this.angularProvider.logout();
  }

}
