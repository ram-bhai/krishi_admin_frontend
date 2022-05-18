import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/ApiServices/admin.service';
import { ContractService } from 'src/app/ApiServices/contract.service';
import { ConfirmationComponent } from 'src/app/confirmation/confirmation.component';
import { ContractFarming } from 'src/app/models/contract-farming';

@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {
  requests:any;
  paginate:any
  totalLength?:number;
  page:number = 1;
  pending?:boolean;
  verification?:boolean;
  approved?:boolean;
  
  
  
    constructor(private router:Router,
      public dialog: MatDialog,
      public admin:AdminService,
      public notify:ToastrService,
      private contracts:ContractService) {}
  
    ngOnInit(): void {
      this.contracts.viewContracts().subscribe(data=>{
        this.requests = data;
        this.totalLength = data.length;
      })
    }
    openDialog(): void {
      this.dialog.open(ConfirmationComponent);
    }

    approve(cid:any){
      window.confirm("Are you sure");
      if(confirm()==true){
        this.pending = false,
      this.approved=true,
      this.verification = true
      this.contracts.approval(this.pending,this.verification,this.approved,cid).subscribe(data=>{
        this.requests = data;
        console.log(data);
        if(data)
        this.notify.success("Request approved");
        else
          this.notify.error("Request not approved");
      },
        err=>{
          console.log(err);
          if(err instanceof HttpErrorResponse){
            if(err.status == 400){
              this.notify.error("Bad request!")
            }
            else if(err.status == 500){
              this.notify.warning("Internal Server Error!")
          }else if(err.status == 503){
            this.notify.warning("Service Unavailable!")
        }

      }
    })
    
    }
  }
  
  

  cancel(cid:any){
    window.confirm("Are you sure ?")
    if(confirm()==true){
      this.pending = false,
    this.approved=false,
      this.verification = false
      this.contracts.cancellation(this.pending,this.verification,this.approved,cid).subscribe(data=>{
        this.requests = data;
        if(data)
        this.notify.success("Request Cancelled");
        else
          this.notify.error("Request not Cancelled");
      },
        err=>{
          console.log(err);
          if(err instanceof HttpErrorResponse){
            if(err.status == 400){
              this.notify.error("Bad request!")
            }
            else if(err.status == 500){
              this.notify.warning("Internal Server Error!")
          }else if(err.status == 503){
            this.notify.warning("Service Unavailable!")
        }

      }
    })
  }

  }


  isLoggedIn():boolean{
  return this.admin.checkToken();
  
  }
}
function ConfirmComponent(ConfirmComponent: any) {
  throw new Error('Function not implemented.');
}

