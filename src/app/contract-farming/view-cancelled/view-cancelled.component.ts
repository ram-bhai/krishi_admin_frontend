import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/ApiServices/admin.service';
import { ContractService } from 'src/app/ApiServices/contract.service';

@Component({
  selector: 'app-view-cancelled',
  templateUrl: './view-cancelled.component.html',
  styleUrls: ['./view-cancelled.component.css']
})
export class ViewCancelledComponent implements OnInit {
  requests:any;
  paginate:any
  totalLength?:number;
  page:number = 1;
  verification?:boolean;
  approved?:boolean;
  
  
  
    constructor(private router:Router,
      public dialog: MatDialog,
      public admin:AdminService,
      public notify:ToastrService,
      private contracts:ContractService) {}
  
    ngOnInit(): void {
      this.contracts.viewCancelled().subscribe(data=>{
        this.requests = data;
        this.totalLength = data.length;
      })
    }


}
