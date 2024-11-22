import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AmigosComponent} from "./amigos/amigos.component";
import {AnyadirAmigoComponent} from "./anyadir-amigo/anyadir-amigo.component";
import {AnyadirGastoComponent} from "./anyadir-gasto/anyadir-gasto.component";
import {CrearGrupoComponent} from "./crear-grupo/crear-grupo.component";
import {GrupoComponent} from "./grupo/grupo.component";
import {ParticipantesComponent} from "./participantes/participantes.component";
import {LoginComponent} from "./login/login.component";





export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },


  {path: 'login', component: LoginComponent},
  {path: 'amigos', component: AmigosComponent,},
  {path: 'anyadir-amigo', component: AnyadirAmigoComponent},
  {path: 'anyadir-gasto', component: AnyadirGastoComponent},
  {path: 'crear-grupo', component: CrearGrupoComponent},
  {path: 'grupo', component: GrupoComponent},
  {path: 'participantes', component: ParticipantesComponent},


];
