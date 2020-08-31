import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  myFavoriteColor:string="blue";
  @Output() SendDataToPere = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  SendToFather(){
    this.SendDataToPere.emit(this.myFavoriteColor);
  }

}
