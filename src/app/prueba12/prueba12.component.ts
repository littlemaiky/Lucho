import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-prueba12',
  templateUrl: './prueba12.component.html',
  styleUrls: ['./prueba12.component.css']
})
export class Prueba12Component implements OnInit {

  cursos: Curso[] = [
  ];
// crear una instancia de la clase storeservice
  constructor(private storeService: StoreService) { 
    this.cursos = storeService.cursos;
  }

  
  ngOnInit(): void {
  }

}
