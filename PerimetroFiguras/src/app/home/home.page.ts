import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
 CommonModule,
  FormsModule,

  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,

  IonItem,
  IonSelect,
  IonSelectOption,

  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,

  IonButton,

  CirculoComponent,
  TrianguloComponent
  ]
})
export class HomePage {



  figuraSeleccionada: string = '';

  volverInicio() {
    this.figuraSeleccionada = '';
  }


}