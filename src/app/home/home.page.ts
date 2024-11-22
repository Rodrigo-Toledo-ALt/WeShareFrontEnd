import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton, IonImg, IonIcon, IonMenuToggle, IonMenu, IonButtons, IonMenuButton
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {Grupo} from "../Modelos/Grupo";
import {GrupoService} from "../Servicios/grupo.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonImg, IonIcon, IonMenuToggle, IonMenu, IonButtons, IonMenuButton, RouterLink, NgForOf],
})
export class HomePage {
  constructor(private grupoService: GrupoService) {}

  grupos: Grupo[] = [];

  ngOnInit() {
    this.cargarGrupos()
  }

  cargarGrupos() {
    this.grupoService.getGrupos().subscribe({
      next: (data) => this.grupos = data,
      error: (error) => console.log('Error', error),
      complete: () => console.log('Petición Completada')
    });
  }
}
