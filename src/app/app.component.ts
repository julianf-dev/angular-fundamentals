import { Component } from '@angular/core';
import { Product } from './product.model';
import { User } from './user.model';

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
  box = {
    width:100,
    height: 100,
    background: 'red'
  }
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 1500,
      image: 'http://placeimg.com/640/480/any',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 1600,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Colleción de albumnes',
      price: 1700,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Mis libros',
      price: 1800,
      image: 'http://placeimg.com/640/480/any'
    },
    {
      name: 'Casa para perro',
      price: 1900,
      image: 'http://placeimg.com/640/480/any'
    },

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

  register = {
    name: '',
    email: '',
    password: ''
  }

  users: User[] = []

  onRegister(){
    this.register.name && this.register.email && this.register.password && this.users.push(
      {
        name: this.register.name,
        email: this.register.email,
        password: this.register.password
      }
    )
    console.log(this.users)
  }
}


