import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquipService } from 'src/app/ApiServices/equip.service';
import { EditService } from 'src/app/models/edit-service';
import { EquipmentsModule } from '../equipments.module';


@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {
equip:any;
 pid:any;
editequip:EditService = new EditService("","","","","","","","") 
  constructor(private activerouter:ActivatedRoute, 
    private notify:ToastrService,
    private edit:EquipService,
    private router:Router){ 
    this.pid = this.activerouter.snapshot.paramMap.get('id')
    console.log(this.pid);
    alert(this.pid);
    }

  ngOnInit(): void {
    this.edit.service_Details(this.pid).subscribe(data=>{
      alert(data);
      this.equip = data;
    })
  }
  selectimage(event: any) {
    if (event.target.files.length > 0) {
      this.editequip.images = event.target.files[0];
      console.log(this.editequip.images);
    }

  }
  
  updateservice() {
    alert("called");
    const formData = new FormData();
    formData.append("pid",this.editequip.sid);

    formData.append("name", this.editequip.name);

    formData.append("charges", this.editequip.charges);

    formData.append('travellingCharge', this.editequip.travellingCharge);

    formData.append('description', this.editequip.description);

    formData.append('adminDescription', this.editequip.adminDescription);

    formData.append('image', this.editequip.images);

    formData.append('video', this.editequip.video);
    console.log(formData);
    this.edit.updateEquipment(formData).subscribe(data => {
      console.log(formData);
      alert(data);
      if (data)
        this.notify.success("Equipment Updated...");
      else
        this.notify.error("Unable to update...!");
    })

  }

  cancel(){
    this.router.navigate(['services/view-equips']);
  }
  

}
