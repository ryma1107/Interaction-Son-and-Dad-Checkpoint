import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {
  colorSon: string;
  constructor() { }

  ngOnInit(): void {
  }
  ColorObtained(color){
    this.colorSon= color;
  }

}
