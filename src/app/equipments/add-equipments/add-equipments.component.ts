import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EquipService } from 'src/app/ApiServices/equip.service';
import { Addservice } from 'src/app/models/addservice';

@Component({
  selector: 'app-add-equipments',
  templateUrl: './add-equipments.component.html',
  styleUrls: ['./add-equipments.component.css']
})
export class AddEquipmentsComponent implements OnInit {
  addequp: Addservice = new Addservice("", "", "", "", "", "", "");
  constructor(public service: EquipService, public notifyService: ToastrService) { }

  ngOnInit(): void {
  }

  addservice() {
    const formData = new FormData();
    formData.append("name", this.addequp.name);

    formData.append("charges", this.addequp.charges);

    formData.append('travellingCharge', this.addequp.travellingCharge);

    formData.append('description', this.addequp.description);

    formData.append('adminDescription', this.addequp.adminDescription);

    formData.append('image', this.addequp.images);

    formData.append('vedio', this.addequp.vedio);
    this.service.add_service(formData).subscribe(data => {
      console.log(formData);
      if (data)
        this.notifyService.success("service added...");
      else
        this.notifyService.error("not added...!");
    })

  }
  selectimage(event: any) {
    if (event.target.files.length > 0) {
      this.addequp.images = event.target.files[0];
      console.log(this.addequp.images);
    }

  }

}
