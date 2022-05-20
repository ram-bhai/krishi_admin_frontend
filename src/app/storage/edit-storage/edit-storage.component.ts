import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/ApiServices/storage.service';
import { EditStorage } from 'src/app/models/edit-storage';

@Component({
  selector: 'app-edit-storage',
  templateUrl: './edit-storage.component.html',
  styleUrls: ['./edit-storage.component.css']
})
export class EditStorageComponent implements OnInit {

  storages:any;

 editStorage:EditStorage = new EditStorage("","","","","","","","","")
  constructor(private notify:ToastrService,
    private router:Router,
    private store:StorageService) { }

  
  selectimage(event: any) {
    if (event.target.files.length > 0) {
      this.editStorage.image = event.target.files[0];
      console.log(this.editStorage.image);
    }
  }

  updatestorage(){
    const formData = new FormData();

    formData.append("storageId", this.editStorage.storageId);

    formData.append("name", this.editStorage.name);

    formData.append("storage_description", this.editStorage.storage_description);

    formData.append('capacity', this.editStorage.capacity);

    formData.append('location', this.editStorage.location);

    formData.append('image', this.editStorage.image);

    this.store.updatestorages(formData).subscribe(data => {
      console.log(formData);
      if (data) {
        console.log(data);
        this.notify.success("storage Updated...");
      }
      else
        this.notify.error("Updation Failed...!");
    })

  } 

  cancel(){
    this.router.navigate(['storage/all-storage'])
  }

  ngOnInit(): void {
    this.store.allStorage().subscribe(data=>{
      this.storages = data;
    })
  }

}
