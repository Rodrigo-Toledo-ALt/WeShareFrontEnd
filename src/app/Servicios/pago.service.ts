import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Grupo} from "../Modelos/Grupo";
import {Pago} from "../Modelos/Pago";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private httpClient: HttpClient) {}


  getBalances(): Observable<number[]> {

    return this.httpClient.get<number[]>('/api/pago/verBalances?id_grupo=27');
  }

  getPagos(): Observable<Pago[]> {

      return this.httpClient.get<Pago[]>('/api/pago/verPagos?id_grupo=27  ');
  }

  postPago(pagoCreado: Pago): Observable<any> {

    pagoCreado.grupoId = 27;
    pagoCreado.usuarioId = 31;

    if(pagoCreado.fecha){
      pagoCreado.fecha = formatDate(pagoCreado.fecha, 'yyyy-MM-dd', 'en-US');
    }



    return this.httpClient.post<any>('/api/pago/añadir',pagoCreado);
  }

}
