import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Grupo} from "../Modelos/Grupo";
import {Usuario} from "../Modelos/Usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient) { }

  getAmigos(): Observable<Usuario[]> {

    return this.httpClient.get<Grupo[]>('/api/usuario/listarAmigos?id_usuario=31');
  }

  postParticipante(participanteAnyadido: Usuario): Observable<any> {

    let id_usuario = participanteAnyadido.id;
    let id_grupo = 23
    let parametros: string = `id_usuario=${id_usuario}&id_grupo=${id_grupo}`;

    return this.httpClient.post<any>('/api/grupo/participantes/nuevo?'+ parametros,participanteAnyadido);
  }

}
