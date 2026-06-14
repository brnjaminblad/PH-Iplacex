# 📐 Calculadora de Perímetros

Aplicación desarrollada con **Ionic Framework** y **Angular** que permite calcular el perímetro de distintas figuras geométricas mediante una interfaz sencilla e intuitiva.

## Objetivo

El objetivo de este proyecto es aplicar conceptos de programación orientada a objetos, herencia, clases abstractas y componentes reutilizables utilizando Ionic y Angular.

## Funcionalidades

* Selección de figura geométrica.
* Cálculo del perímetro de un círculo.
* Cálculo del perímetro de un triángulo escaleno.
* Interfaz desarrollada con componentes Ionic.
* Uso de componentes Standalone.
* Implementación de herencia y clases abstractas en TypeScript.

## Tecnologías Utilizadas

* Ionic Framework
* Angular
* TypeScript
* HTML
* SCSS

## Estructura del Proyecto

```text
src/
│
├── app/
│   ├── components/
│   │   ├── circulo/
│   │   └── triangulo/
│   │
│   ├── models/
│   │   ├── figura-geometrica.ts
│   │   ├── circulo.ts
│   │   ├── triangulo-escaleno.ts
│   │   └── triangulo-equilatero.ts
│   │
│   └── home/
│
└── assets/
```

## Figuras Implementadas

### 🔵 Círculo

Fórmula utilizada:

P = 2 × π × radio

El usuario debe ingresar el valor del radio para obtener el perímetro.

### 🔺 Triángulo Escaleno

Fórmula utilizada:

P = lado1 + lado2 + lado3

El usuario debe ingresar los tres lados del triángulo para calcular su perímetro.

## Instalación

1. Clonar el repositorio.

```bash
git clone <url-del-repositorio>
```

2. Ingresar a la carpeta del proyecto.

```bash
cd PerimetroFiguras
```

3. Instalar dependencias.

```bash
npm install
```

4. Ejecutar la aplicación.

```bash
ionic serve
```

5. Abrir en el navegador:

```text
http://localhost:8100
```

## Capturas de Pantalla

### Pantalla Principal

Agregar captura de la pantalla principal.

### Componente Círculo

Agregar captura del cálculo del perímetro del círculo.

### Componente Triángulo

Agregar captura del cálculo del perímetro del triángulo.

## Autor

**Brunno Mori**

Proyecto desarrollado como actividad académica utilizando Ionic Framework y Angular.
