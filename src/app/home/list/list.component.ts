import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  locations=[
  {name:"ABC",status:"Critical" },
  {name:"ABC",status:"Critical" },
  {name:"ABC",status:"Critical" },
  {name:"ABC",status:"Critical" },
  {name:"ABC",status:"Critical" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
