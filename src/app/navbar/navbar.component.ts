import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from '../ApiServices/admin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private admin:AdminService,private router: Router,public dialog: MatDialog) { }
  appear=false;
  close=false;
  
  toggle(){
    this.appear=!this.appear;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(NavbarComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  toggle2(){
    this.close=!this.close;
  }

  isLoggedIn():boolean{
    return this.admin.checkToken();
  }
  signOut(){
    if(confirm("Are you Sure ?")){
      sessionStorage.removeItem('token');
      this.router.navigate(['sign-in']);
    }
  }

  ngOnInit(): void {
  }


}
