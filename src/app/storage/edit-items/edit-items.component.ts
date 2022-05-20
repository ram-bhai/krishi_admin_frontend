import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/ApiServices/items.service';
import { EditItems } from 'src/app/models/edit-items';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.css']
})
export class EditItemsComponent implements OnInit {
updateItem:EditItems = new EditItems("",50,"","","","","")
  constructor(private items:ItemsService,private notify:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
  }

  additems() {
    this.items.updateItem(this.updateItem).subscribe(data => {
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
