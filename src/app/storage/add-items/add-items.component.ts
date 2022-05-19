import { Component, OnInit } from '@angular/core';
import { Additems } from 'src/app/models/additems';
import { ItemsService } from 'src/app/ApiServices/items.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additem: Additems = new Additems('', 50, '', '', '', '');
  storage: any;
  storages: any
  data: any;

  constructor(public service: ItemsService, public notifyService: ToastrService) { }

  ngOnInit(): void {
    this.service.viewStorage().subscribe(data => {
      this.storages = data;
    })
  }

  additems() {
    this.service.itemservice(this.additem).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data);
        this.notifyService.success("storage items added...");
      }
      else
        this.notifyService.error("items not added...!");
    })
  }
}

