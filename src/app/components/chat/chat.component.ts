/* Componente creado para manejar la Clase Chat */

import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  // declaramos la variable para el mensaje de Chat
  mensaje: string = "";
  // declaramos una variable para hacer foco siempre en el último mensaje del Chat
  elemeto: any;

  // inyectamos el Servicio
  constructor( public _cs: ChatService ) {
    
    // llamamos al método del Servicio
    this._cs.cargarMensajes()
            .subscribe( ()=> {
              setTimeout ( ()=> {
                this.elemeto.scrollTop = this.elemeto.scrollHeight;
              }, 20);             
            }); 
   }

  ngOnInit(): void {
    this.elemeto = document.getElementById('app-mensajes');
  }

  // creamos el método para enviar mensajes de Chat
  enviar_mensaje(){
    // validamos que exista un mensaje y lo agregamos
    if(this.mensaje.length === 0){
      return
    } else {
      this._cs.agregarMensaje(this.mensaje);

      // borramos el mensaje de la caja de texto
      this.mensaje = "";
    }
  }
}
