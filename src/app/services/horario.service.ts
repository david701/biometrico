import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { HorarioModel } from '../models/horario';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  private urlHorario = 'http://192.168.150.36:5000/api/horarios';

  constructor(private httpClient: HttpClient) {}

  public getHorarios(): Observable<HorarioModel[]>{
    return this.httpClient.get<HorarioModel[]>(this.urlHorario).pipe(
      map((resp: HorarioModel[])=>{
        return resp;
      })
    );
  }
  addHorario(horario: any): Observable<HorarioModel[]>{
    return this.httpClient.post<HorarioModel[]>(this.urlHorario+'/add', horario);
  }
  updateHorario(horario:any, id: String): Observable<HorarioModel[]>{
    return this.httpClient.put<HorarioModel[]>(`${this.urlHorario}/update/${id}`, horario);
  }
}
