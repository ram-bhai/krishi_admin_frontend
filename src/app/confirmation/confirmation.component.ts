import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router:Router, private dialog:MatDialog,private ref:MatDialogRef<any>) { }

  ngOnInit(): void {
  }
  signout(){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    this.router.navigate(['sign-in']);
    this.ref.close();
  }

  dialogClose(){
    this.ref.close();
  }

  


}
