import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{StorageService} from '../../ApiServices/storage.service'

@Component({
  selector: 'app-view-storage',
  templateUrl: './view-storage.component.html',
  styleUrls: ['./view-storage.component.css']
})
export class ViewStorageComponent implements OnInit {
  storages:any;
  paginate:any
  totalLength?:number;
  page:number = 1;
  storage:any;
  
  constructor(private router:Router,
    private active:ActivatedRoute,
    private store:StorageService,
    private notify:ToastrService) {}

  ngOnInit(): void {

    this.store.allStorage().subscribe(data=>{
      this.storage = data;
      this.totalLength = data.length;

    })
  }
  // 
  
  edit(id:any){
    this.router.navigate(['equip-info',id],{relativeTo:this.active});
  }
  
  remove(id:any){
    window.confirm("Are you sure")
    if(confirm()==true)
    {
      this.store.storage_view().subscribe(data=>{
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
