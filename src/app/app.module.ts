import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//importamos las clases para trabajar con firestore
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//importamos la configuración de firebase
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Prueba12Component } from './prueba12/prueba12.component';
import { Prueba13Component } from './prueba13/prueba13.component';
import { CentroComponent } from './centro/centro.component';
import { PrimeroComponent } from './2in/primero/primero.component';
import { SegundoComponent } from './2in/segundo/segundo.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CreateComponent,
    EditComponent,
    Prueba12Component,
    Prueba13Component,
    CentroComponent,
    PrimeroComponent,
    SegundoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //inicializamos la app de firebase con angular
    AngularFireAuthModule, //modulo para trabajar con firestore
    AngularFirestoreModule, //modulo para trabajar con firestore
    FormsModule, // modulo para formularios (create y edit)
    ReactiveFormsModule // modulo para formularios (create y edit)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


