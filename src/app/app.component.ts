import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {


  title: string = 'Hello World';
  name: string = 'Julian';
  age: number = 27;
  img: string = 'https://source.unsplash.com/random';
  btnDisabled = true;
  btnItemsDisabled = false;
  person = {
    name: 'Julian',
    age: 28,
  }

  items: any[] = [
    { name: 'Pan', price: 5 },
    { name: 'Leche', price: 22 },
    { name: 'Huevo', price: 32 }
  ];

  names: string[] = ['juli', 'nico', 'tati', 'josep'];
  newName = '';

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  newItem = { name: "", price: 0 };

  addItem() {
    this.newItem.name && this.newItem.price && this.items.push({ name: this.newItem.name, price: this.newItem.price })
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

}


