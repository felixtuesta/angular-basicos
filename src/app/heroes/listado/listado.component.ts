import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor'];
  heroeCapturado: string = 'Capturando héroe...';
  capturarHeroe(){
    this.heroeCapturado = this.heroes.shift() || 'Éxito en la misión. Todos los héroes han sido capturados...';  
  }
}
