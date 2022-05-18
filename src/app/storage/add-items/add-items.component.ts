import { Component, OnInit } from '@angular/core';
import { Additems} from 'src/app/models/additems';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additem: Additems = new Additems ('',0,'','',50);
  storage:any;
  storages:any

  constructor() { }

  ngOnInit(): void {
  }

  additems(){

  }

}
