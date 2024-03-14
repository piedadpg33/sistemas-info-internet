import { Component } from '@angular/core';
import { error, time } from 'console';
import { errorMonitor } from 'events';
import { url } from 'inspector';
import { addListener } from 'process';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'chanchito';
  isLoggedIn= false;
  greet() {
    alert('TCHH NO SE TOCAA AL CHANCHITO ');
  }
  alerta(){
    
    open("https://www.google.com/search?q=SINDROME+DE+STENDHAL&source=lmns&bih=943&biw=958&hl=es&sa=X&ved=2ahUKEwjZyKqEufKEAxXpkicCHcm3DogQ0pQJKAB6BAgBEAI");
    
  }
  
  
}
