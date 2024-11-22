import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCol, IonContent, IonInput
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";
import {home} from "ionicons/icons";
import {FormsModule} from "@angular/forms";
import {Grupo} from "../Modelos/Grupo";
import {GrupoService} from "../Servicios/grupo.service";

@Component({
  selector: 'app-crear-grupo',
  templateUrl: './crear-grupo.component.html',
  styleUrls: ['./crear-grupo.component.scss'],
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonContent,
    IonCol,
    RouterLink,
    IonInput,
    FormsModule
  ]
})
export class CrearGrupoComponent  implements OnInit {

  constructor(private grupoService: GrupoService) { }

  grupoCreado: Grupo = new Grupo();

  ngOnInit() {}



  protected readonly home = home;

  crearGrupo() {

    console.info('Creando grupo', this.grupoCreado);

    this.grupoService.postGrupo(this.grupoCreado).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
      // cargarPublicaciones(); creo que sería algo así
    });

  }


  //Tú no necesitas el método cargar grupos porque ya cambias de componente en la creación.
  // Pero tendrías que hacerlo si no cambiaras y ponerlo dentro del onInit, su forma sería la siguiente

  /*

    cargarPublicaciones():void{
      this.grupoService.getGrupos().subscribe({}
   */

}
