import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/ApiServices/storage.service';
import {Addstoarge} from 'src/app/models/addstoarge';

@Component({
  selector: 'app-add-storage',
  templateUrl: './add-storage.component.html',
  styleUrls: ['./add-storage.component.css']
})
export class AddStorageComponent implements OnInit {
  storage:any;
  storages:any;
addservice:Addstoarge = new Addstoarge ("","","",true,"","","","",""); 
  constructor(public service: StorageService ,public notifyService:ToastrService) { }
  ngOnInit(): void {
    this.service.storage_view().subscribe(data=>{
      this.storages = data;
      console.log(data);
    })
  }
  addstorage(){
      const formData = new FormData();
      
      formData .append ("storageId",this.addservice.storageId);

      formData.append("name", this.addservice.name);
  
      formData.append("storage_description", this.addservice.storage_description);
  
      formData.append('capacity', this.addservice.capacity);
  
      formData.append('location', this.addservice.location);
  
      formData.append('image', this.addservice.image);
  
      this.service.Storage_Api(formData).subscribe(data => {
        console.log(formData);
        if (data){
        console.log(data);
          this.notifyService.success("storage added...");
        }
        else
          this.notifyService.error("not added...!");
      })
  
    }

  selectimage(event: any) {
    if (event.target.files.length > 0) {
      this.addservice.image = event.target.files[0];
      console.log(this.addservice.image);
    }

  }

}
