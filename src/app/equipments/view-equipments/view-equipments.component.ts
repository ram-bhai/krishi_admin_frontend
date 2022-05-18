import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/ApiServices/admin.service';
import { EquipService } from 'src/app/ApiServices/equip.service';

@Component({
  selector: 'app-view-equipments',
  templateUrl: './view-equipments.component.html',
  styleUrls: ['./view-equipments.component.css']
})
export class ViewEquipmentsComponent implements OnInit {
tools:any;
paginate:any
totalLength?:number;
page:number = 1;


  constructor(private router:Router,
    public dialog: MatDialog,
    public admin:AdminService,
    public active:ActivatedRoute,
    private equips:EquipService) {}

  ngOnInit(): void {
    this.equips.service_Api().subscribe(data=>{
      this.tools = data;
      this.totalLength = data.length;
    })
  }
  service_item(id:any){
    this.router.navigate(['equipment-info',id]);
}
isLoggedIn():boolean{
return this.admin.checkToken();

}
add(){
  window.alert("called");
  this.router.navigate(['add-equips'],{relativeTo:this.active});
}
}
