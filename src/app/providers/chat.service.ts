/* Servicio creado para controlar todas las acciones del Chat */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/* Copiamos según documentación de AngularFire */
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

/* importamos la Interface para usar el tipo de dato "personalizado" */
import { Mensaje } from '../interface/mensaje.interface';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  // Copiamos la propiedad según documentación de AngularFire
  private itemsCollection: AngularFirestoreCollection<Mensaje> | undefined;
  // creamos una variable para manejar los mensajes del Chat
  public chats: Mensaje[] = [];
  // creamos una propiedad para manejar la info de la autenticación
  public usuario: any = {};

  /* Copiamos el constructor según documentación de AngularFire */
  constructor(private afs: AngularFirestore,
              public auth: AngularFireAuth) {
 
    this.auth.authState.subscribe(user =>{
      console.log("Estado", user);
      if(!user){
        return;
      } else {
        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
      }
    });
  }
  
  // copiamos según documentación de AngularFire (Autenticación)
  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

  // creamos un método para cargar los mensajes del Chat desde Firebase
  cargarMensajes() {

    // copiamos según documentación de AngularFire (agregamos querys para ordenar los mensjaes de Chat y mostrar los últimos 5)
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=> ref.orderBy('fecha', 'desc').limit(5));
    return this.itemsCollection.valueChanges().pipe(
                                map((mensajes: Mensaje[])=>{

                                  this.chats = [];
                                  for (let mensaje of mensajes) {
                                    this.chats.unshift(mensaje);
                                  }

                                 return this.chats;
                               })
    )
  }

  // creamos un método para agregar un mensaje nuevo (tener en cuenta que debemos respetar la estructura de la Interface para poder insertar en Firebase)
  agregarMensaje( texto: string ) {

    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid,
    }

    return this.itemsCollection?.add(mensaje);
  }
}
