import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contract-dashboard',
  templateUrl: './contract-dashboard.component.html',
  styleUrls: ['./contract-dashboard.component.css']
})
export class ContractDashboardComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  all(){
    this.router.navigate(['all-reqs'],{relativeTo: this.activatedRoute});

  }
  accept(){
    this.router.navigate(['accept-reqs'],{relativeTo: this.activatedRoute});
  }

  reject(){
    this.router.navigate(['reject-reqs'],{relativeTo:this.activatedRoute});
  }

}
