import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  disabled = false;
  mensaje = 'Empty person'

  getPerson(){
    this.mensaje = 'Person add sucessly'
  }
}
