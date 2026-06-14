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
  IonButton
} from '@ionic/angular/standalone';

import { TrianguloEscaleno } from '../../models/triangulo-escaleno';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
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
  IonButton
]
})
export class TrianguloComponent {

  lado1 = 0;
  lado2 = 0;
  lado3 = 0;

  resultado = 0;
  mostrarResultado = false;

  calcular() {

    const triangulo = new TrianguloEscaleno(
      this.lado1,
      this.lado2,
      this.lado3
    );

    this.resultado = triangulo.calcularPerimetro();

    this.mostrarResultado = true;
  }

}