import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-storage-dashboard',
  templateUrl: './storage-dashboard.component.html',
  styleUrls: ['./storage-dashboard.component.css']
})
export class StorageDashboardComponent implements OnInit {

  constructor(private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
  }

  allStorages(){
    this.router.navigate(['all-storage'],{relativeTo:this.active})
  }

  addStorage(){
    this.router.navigate(['add-new-storage'],{relativeTo:this.active})
  }

  addItems(){
    this.router.navigate(['add-items'],{relativeTo:this.active});
  }

  book(){
    this.router.navigate(['booked-storages'],{relativeTo:this.active});
  }



}
