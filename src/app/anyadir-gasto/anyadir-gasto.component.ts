import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent, IonInput, IonItem, IonRow
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {Pago} from "../Modelos/Pago";
import {PagoService} from "../Servicios/pago.service";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-anyadir-gasto',
    templateUrl: './anyadir-gasto.component.html',
    styleUrls: ['./anyadir-gasto.component.scss'],
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
    IonRow,
    IonItem,
    IonInput,
    FormsModule
  ]
})
export class AnyadirGastoComponent  implements OnInit {

  constructor(private pagoService: PagoService) { }

  pagoCreado: Pago = new Pago();


  ngOnInit() {}

  crearPago():void{
    console.info('Creando grupo', this.pagoService);

    this.pagoService.postPago(this.pagoCreado).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
      // cargarPublicaciones(); creo que sería algo así
    });

  }


}



