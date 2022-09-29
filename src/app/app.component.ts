import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:string = 'Hello World';
  name:string = 'Julian';
  age: number = 27;
  img: string = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Julian',
    age: 28,
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age++;
  }

  onScroll(event: Event){
    const element = event.target  as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target  as HTMLInputElement;
    element.value;

    this.person.name = element.value;

  }
}
