import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent, IonItem, IonLabel, IonList, IonSearchbar, IonThumbnail
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {UsuarioService} from "../Servicios/usuario.service";
import {Usuario} from "../Modelos/Usuario";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-anyadir-amigo',
    templateUrl: './anyadir-amigo.component.html',
    styleUrls: ['./anyadir-amigo.component.scss'],
    standalone: true,
  imports: [
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCol,
    IonContent,
    RouterLink,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonSearchbar,
    NgForOf
  ]
})
export class AnyadirAmigoComponent  implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  amigos: Usuario[] = [];
  amigosFiltrados: Usuario[] = [];

  ngOnInit() {

    this.usuarioService.getAmigos().subscribe({
      next: (data) => this.amigos = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')

    });

  }




  filterAmigos(event: any) {



    const searchTerm = event.target.value.toLowerCase();
    this.amigosFiltrados = this.amigos.filter(amigo =>
      amigo.nombre!.toLowerCase().includes(searchTerm)
    );
  }

  anyadirParticipante(amigo: Usuario): void {
    console.info('Añadiendo amigo', amigo);

    this.usuarioService.postParticipante(amigo).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
      // cargarPublicaciones(); creo que sería algo así
    });

  }

}
