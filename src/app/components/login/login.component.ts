/* Componente creado para la autenticación de Google */ 

import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  // inyectamos el Servicio
  constructor( public _cs: ChatService ) { }

  ngOnInit(): void {
  }

  // método para ingresar con la cuenta de Google
  ingresar() {

    this._cs.login();
  }

}
