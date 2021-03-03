import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{title}}</h1>
        <h2>La base es: {{base}}</h2>
        <button (click)="sumar()">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="restar()">- {{base}}</button>    
    `
})
export class ContadorComponent{
    title: string = 'Hola Mundo desde AppComponent...';
    numero: number = 10;
    base: number = 5;
    sumar(){
      this.numero += this.base;
    };
    restar(){
      this.numero -= this.base;
    }; 
}