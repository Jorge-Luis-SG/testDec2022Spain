import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent implements OnInit {

  constructor() {

  }

  @Input() data: any;
  @Input() id: number;


  ngOnInit(): void {}
}
