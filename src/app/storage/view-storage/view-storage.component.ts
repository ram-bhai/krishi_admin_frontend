import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ItemsService } from 'src/app/ApiServices/items.service';
import{StorageService} from '../../ApiServices/storage.service'

@Component({
  selector: 'app-view-storage',
  templateUrl: './view-storage.component.html',
  styleUrls: ['./view-storage.component.css']
})
export class ViewStorageComponent implements OnInit {
  
  paginate:any
  totalLength?:number;
  page:number = 1;
  storage:any;
 
  
  constructor(private router:Router,
    private active:ActivatedRoute,
    private store:StorageService,
    private item:ItemsService,
    private notify:ToastrService) {}

  ngOnInit(): void {

    this.store.allStorage().subscribe(data=>{
      this.storage = data;
      this.totalLength = data.length;

    })
  } 
  
  edit(id:any){
    console.log(id)
    alert(id);
    this.router.navigate(['storage/edit-storage',id]);
  }

  editItem(itemId:any,storeId:any){
    console.log(storeId)
    this.router.navigate(['storage/edit-items',itemId,storeId]);
  }
  
  removeItem(productId:any, storageId:any,rowIndex:number){
    window.alert("Are you sure")
    if(confirm()==true){
      this.item.removeItem(productId,storageId).subscribe(data=>{
        if(data){
          this.storage.splice(rowIndex,1);
          this.notify.success("Item deleted");
        }
        else{
          this.notify.error("Unable to delete Item")
        }
      })
    }
  }
  
  remove(id:any,rowIndex:number){
    window.confirm("Are you sure")
    if(confirm()==true)
    {
      this.store. removeStorage_id(id).subscribe(data=>{
        if(data.message = "Storage Deleted"){
          this.storage.splice(rowIndex,1);
          this.notify.success("Storage deleted");
        }
        else{
          this.notify.error("Unable to delete Storage");
        }
      
      })
    }

    }
  

}
