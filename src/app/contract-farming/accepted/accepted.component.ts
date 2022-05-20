import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/ApiServices/contract.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {
  tools:any;
  paginate:any
  totalLength?:number;
  page:number = 1;
  
  constructor(private contracts:ContractService) { }

  ngOnInit(): void {
    this.contracts.accepted().subscribe(data=>{
      this.tools = data;
      this.totalLength = data.length;
    })
  }
  }


