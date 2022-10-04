import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  widthImg = 10;
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

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'http://placeimg.com/640/480/any',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'http://placeimg.com/640/480/any'
    }
  ]

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


