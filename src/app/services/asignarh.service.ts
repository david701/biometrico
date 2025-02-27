import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AsignarhModel } from '../models/asignarh';

@Injectable({
  providedIn: 'root'
})
export class AsignarhService {

  private urlAsignar = 'http://192.168.150.36:5000/api/funcionarios_horario';

  constructor(private httpClient: HttpClient) { }

  public getAsignarh(): Observable<AsignarhModel[]>{
    return this.httpClient.get<AsignarhModel[]>(this.urlAsignar).pipe(
      map((resp: AsignarhModel[])=>{
        return resp;
      })
    )
  }
  public getAasignarh(id: string): Observable<AsignarhModel[]>{
    return this.httpClient.get<AsignarhModel[]>(`${this.urlAsignar}/${id}`);
  }
  addAsignarh(asignar: any): Observable<AsignarhModel[]>{
    return this.httpClient.post<AsignarhModel[]>(this.urlAsignar+'/add', asignar);
  }
  updateAsignarh(asignar:any, id: String): Observable<AsignarhModel[]>{
    return this.httpClient.put<AsignarhModel[]>(`${this.urlAsignar}/update/${id}`, asignar);
  }

}
