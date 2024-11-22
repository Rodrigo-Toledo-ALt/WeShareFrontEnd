import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Grupo} from "../Modelos/Grupo";
import {formatDate} from "@angular/common";


@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private httpClient: HttpClient) {}

  getGrupos(): Observable<Grupo[]> {

    return this.httpClient.get<Grupo[]>('/api/usuario/listarGrupos?id_usuario=31');
  }

  getParticipantes(): Observable<Grupo[]> {

    return this.httpClient.get<Grupo[]>('/api/grupo/verParticipantesGrupo?id_grupo=27');
  }

  postGrupo(grupoCreado: Grupo): Observable<any> {

    if(grupoCreado.fechaCreacion){
      grupoCreado.fechaCreacion = formatDate(grupoCreado.fechaCreacion, 'yyyy-MM-dd', 'en-US');
    }



    return this.httpClient.post<any>('/api/grupo/crear',grupoCreado);
  }



}
