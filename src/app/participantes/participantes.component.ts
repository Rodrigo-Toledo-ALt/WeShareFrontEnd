import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonCol,
  IonContent,
  IonItem,
  IonLabel, IonList, IonRow, IonThumbnail
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {GrupoService} from "../Servicios/grupo.service";
import {Usuario} from "../Modelos/Usuario";
import {NgForOf} from "@angular/common";
import {PagoService} from "../Servicios/pago.service";

@Component({
    selector: 'app-participantes',
    templateUrl: './participantes.component.html',
    styleUrls: ['./participantes.component.scss'],
    standalone: true,
  imports: [
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonButton,
    IonCol,
    IonRow,
    RouterLink,
    NgForOf
  ]
})
export class ParticipantesComponent  implements OnInit {

  participantes: Usuario[] = [];
  balances: number[] = [];

  constructor(private grupoService: GrupoService, private pagoService: PagoService) { }

  ngOnInit() {

    this.grupoService.getParticipantes().subscribe({
      next: (data) => this.participantes = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
    });

    this.pagoService.getBalances().subscribe({
      next: (data) => this.balances = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
    });

  }

}
