import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {

   /* Interpolation*/
   name:string = 'juan';
   lastname:string = 'perez';
   private edad: number = 29;

   getEdad():number{
    return this.edad
   }



}
