import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private router:Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  add(){
    this.router.navigate(['add-equips'],{relativeTo: this.activatedRoute});

  }
  List(){
    this.router.navigate(['view-equips'],{relativeTo: this.activatedRoute});
  }
}
