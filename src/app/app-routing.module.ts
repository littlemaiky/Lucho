import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos nuestros componentes
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { Prueba12Component } from './prueba12/prueba12.component';
import { Prueba13Component } from './prueba13/prueba13.component';
import { PrimeroComponent } from './2in/primero/primero.component';

//creamos la constante para las Rutas
const routes: Routes = [
  { path: '', component: ShowComponent },
  { path: 'create', component: CreateComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'prueba', component: Prueba12Component},
  { path: 'prueba2', component: Prueba13Component},
  { path: 'primero', component: PrimeroComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
