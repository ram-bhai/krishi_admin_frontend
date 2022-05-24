import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StorageService } from 'src/app/ApiServices/storage.service';

@Component({
  selector: 'app-booking-storage',
  templateUrl: './booking-storage.component.html',
  styleUrls: ['./booking-storage.component.css']
})
export class BookingStorageComponent implements OnInit {

  bookedEquipments: any;
  paginate: any;
  totalLength?: number;
  page: number = 1;

  constructor(
    private book: StorageService,
    private notify: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.book.bookedStorage().subscribe((data) => {
      this.bookedEquipments = data;

      console.log(data);
      this.totalLength = data.length;
    });
  }

}
