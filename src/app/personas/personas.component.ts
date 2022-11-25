import { Component } from "@angular/core";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent {
  disabled = false;
  mensaje = 'Empty person'
  title: string = ''
  showPerson : boolean = false;

  addPerson(){
    this.title === '' ?
    this.showPerson === false :
    this.showPerson = true
    this.mensaje = 'Person add sucessly'
  }

  changeTitle(event: Event){
    this.showPerson = true ? this.showPerson = false : this.showPerson = true;
    this.title = (<HTMLInputElement>event.target).value;
    console.log('Metodo change title')
  }
}
