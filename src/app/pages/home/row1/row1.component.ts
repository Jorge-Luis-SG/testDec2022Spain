import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-row1',
  templateUrl: './row1.component.html',
  styleUrls: ['./row1.component.scss']
})
export class Row1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  datas=[
    {
      title:"TODAY'S MONEY",
      money: "$53,000",
      percent: +55,
      text:'since yesterday',
      img:'home',
    },
    {
      title:"TODAY'S USERS",
      money: "2,300",
      percent: +38,
      text:'since yesterday',
      img:'user',

    },
    {
      title:"TODAY'S MONEY",
      money: "+3,462",
      percent: -2,
      text:' since last quarter',
      img:'imbox',

    },
    {
      title:"SALES",
      money: "$103,430",
      percent: +5,
      text:'than last month',
      img:'cart',

    },
  ]

}
