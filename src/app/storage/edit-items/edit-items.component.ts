import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/ApiServices/items.service';
import { EditItems } from 'src/app/models/edit-items';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
item:EditItems = new EditItems("",0,"","","");
item_id:any;
sid:any;
product:any;
name:any;
  constructor(private items:ItemsService,private notify:ToastrService,private activerouter:ActivatedRoute,
    private router:Router) {
      this.item_id = this.activerouter.snapshot.paramMap.get('id');
      this.sid = this.activerouter.snapshot.paramMap.get('sid');
    
      console.log(this.item_id+" "+ this.sid);
      this.items.user_Item(this.item_id,this.sid).subscribe(data=>{

        console.log(data);
        this.product = data;
        this.name = data.name;
        console.log(data[0].name);
          })
      
     }

  ngOnInit(): void {
  }

  additems() {
    this.items.storage_User(this.sid,this.item_id,this.item).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data);
        this.notify.success("Item Updated...");
      }
      else
        this.notify.error("Item not Updated...!");
    })
  }

  cancel(){
    this.router.navigate(['storage/all-storage']);
  }

}
