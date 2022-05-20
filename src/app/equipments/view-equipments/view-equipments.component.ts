import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    public notify:ToastrService,
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
    this.router.navigate(['equipment-info',id],{relativeTo:this.active});
}
isLoggedIn():boolean{
return this.admin.checkToken();

}
// add(){
//   this.router.navigate(['add-equips'],{relativeTo:this.active});
// }

edit(pid:any){
  console.log(pid)
  this.router.navigate(['services/edit-equip',pid]);
}

remove(id:any){
  window.confirm("Are you sure")
  if(confirm()==true)
  {
    this.equips.removeEquipment(id).subscribe(data=>{
      console.log(data)
      if(data.message = "Deleted successfully"){
        this.notify.success("Equipment deleted");
      }
      else{
        this.notify.error("Unable to delete");
      }
    
    })
  
  }
}
}
