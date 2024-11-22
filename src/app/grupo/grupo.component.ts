import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow, IonText
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {GrupoService} from "../Servicios/grupo.service";
import {Usuario} from "../Modelos/Usuario";
import {Pago} from "../Modelos/Pago";
import {PagoService} from "../Servicios/pago.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonRow,
    IonGrid,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    RouterLink,
    IonText,
    NgForOf
  ]
})
export class GrupoComponent  implements OnInit {



  constructor(private pagoService: PagoService) {}

  pagos: Pago[] = [];


  ngOnInit() {

    this.pagoService.getPagos().subscribe({
      next: (data) => this.pagos = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
    });

  }

}
