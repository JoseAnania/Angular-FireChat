/* Copiamos según documentación de AngularFire */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './providers/chat.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule // agregamos el FormsModule
  ],
  providers: [
    ChatService // agregamos el Servicio
  ],
  declarations: [ 
    AppComponent, 
    // agregamos los Componentes
    ChatComponent, 
    LoginComponent 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
