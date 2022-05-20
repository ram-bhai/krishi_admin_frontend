import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EquipService } from 'src/app/ApiServices/equip.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  bookedEquipments: any;
  paginate: any;
  totalLength?: number;
  page: number = 1;

  constructor(
    private book: EquipService,
    private notify: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book.bookedElement().subscribe((data) => {
      this.bookedEquipments = data;
      console.log(data.result.userId.name);
      console.log(data);
      this.totalLength = data.length;
    });
  }
}
