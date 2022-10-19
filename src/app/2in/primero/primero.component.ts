import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.css']
})
export class PrimeroComponent implements OnInit {

  currentbeverage = "abner";
  beverages= ["orlando","juan","pedro"];

  addBeverage(newBeverage: string){
    this.beverages.push(newBeverage);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
