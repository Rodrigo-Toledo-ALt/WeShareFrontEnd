import { Component, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonContent, IonItem, IonLabel,
  IonList, IonThumbnail
} from "@ionic/angular/standalone";
import {UsuarioService} from "../Servicios/usuario.service";
import {Usuario} from "../Modelos/Usuario";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonThumbnail,
    IonLabel,
    IonContent,
    NgForOf
  ]
})
export class AmigosComponent  implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  amigos: Usuario[] = [];

  ngOnInit() {

    this.usuarioService.getAmigos().subscribe({
      next: (data) => this.amigos = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
    });


  }

}
