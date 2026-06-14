import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText
} from '@ionic/angular/standalone';

import { Circulo } from '../../models/circulo';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
imports: [
  CommonModule,
  FormsModule,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonText
]
})
export class CirculoComponent {

  radio: number = 0;
  resultado: number = 0;
  mostrarResultado: boolean = false;

  calcular() {

    const circulo = new Circulo(this.radio);

    this.resultado = circulo.calcularPerimetro();

    this.mostrarResultado = true;
  }

}