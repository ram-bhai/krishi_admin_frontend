import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/ApiServices/admin.service';
import { EquipService } from 'src/app/ApiServices/equip.service';

@Component({
  selector: 'app-equip-detail',
  templateUrl: './equip-detail.component.html',
  styleUrls: ['./equip-detail.component.css']
})
export class EquipDetailComponent implements OnInit {

  constructor(private activatedRouter : ActivatedRoute,private adminService :EquipService) { }
  id:any;
   contact:any;     
  date:any;
  email:any;
  details:any;
  userId:any;
  user:any;
  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
   this.adminService.service_Details(this.id).subscribe(data=>{
     this.userId = sessionStorage.getItem('id')
     this.details = data;
     console.log(this.details);
     alert("details"+data);
   })
   
  }

 

}
