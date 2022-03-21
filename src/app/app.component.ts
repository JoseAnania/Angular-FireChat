/* Copiamos según documentación de AngularFire */

import { Component } from '@angular/core';
import { ChatService } from './providers/chat.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

  // inyectamos el Servicio
  constructor(public _cs: ChatService) {
    
  }
}