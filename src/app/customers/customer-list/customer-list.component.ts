import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/ApiServices/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:any;
  paginate:any
  totalLength?:number;
  page:number = 1;
  
  
    constructor(private router:Router,
      public notify:ToastrService,
      public active:ActivatedRoute,
      private customer:CustomerService) {}
  
    ngOnInit(): void {
      this.customer.viewCustomers().subscribe(data=>{
        this.customers = data;
        this.totalLength = data.length;
      })
    }
  




}
