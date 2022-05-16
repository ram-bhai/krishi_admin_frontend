import { Component } from '@angular/core';
import { AdminService } from './ApiServices/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend_Admin';
constructor(private admin:AdminService){}

  isLoggedIn():boolean{
    return this.admin.checkToken();
  }
}
