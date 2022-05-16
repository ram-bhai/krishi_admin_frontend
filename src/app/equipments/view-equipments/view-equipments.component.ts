import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/ApiServices/admin.service';
import { EquipService } from 'src/app/ApiServices/equip.service';

@Component({
  selector: 'app-view-equipments',
  templateUrl: './view-equipments.component.html',
  styleUrls: ['./view-equipments.component.css']
})
export class ViewEquipmentsComponent implements OnInit {
tools:any;
  constructor(private router:Router,
    public dialog: MatDialog,
    public admin:AdminService,
    private equips:EquipService) { }

  ngOnInit(): void {
    this.equips.service_Api().subscribe(data=>{
      this.tools = data;
    })
  }
  service_item(id:any){
    this.router.navigate(['equipment-info',id]);
}
isLoggedIn():boolean{
return this.admin.checkToken();

}
}
