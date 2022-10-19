import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {

  @Input() beverage= "Nuevo";
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

 addNewBeverage(value:string){
    this.newBeverageEvent.emit(value);
  }

}
