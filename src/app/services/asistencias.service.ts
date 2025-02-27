import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AsistenciaModel } from '../models/asistencia';

import { FuncionarioModel } from '../models/funcionario';
import { AreaModel } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AsistenciasService {

  private urlAsistencia = 'http://192.168.150.36:5000/api/asistencias';
  private urlFunionarios = 'http://192.168.150.36:5000/api/funcionarios';

  constructor(private httpClient: HttpClient) { }

  public getAsistencias(): Observable<AsistenciaModel[]>{
    return this.httpClient.get<AsistenciaModel[]>(this.urlAsistencia).pipe(
      map((resp: AsistenciaModel[])=>{
        return resp;
      })
    )
  }

  public getFuncionariosbyAreas(idarea: any): Observable<FuncionarioModel[]>{
    return this.httpClient.get<FuncionarioModel[]>(this.urlFunionarios).pipe(
      map((resp: FuncionarioModel[])=>{
        return resp.filter(FuncionarioModel => FuncionarioModel.id_departamento === idarea);
      })
    )
  }

  public getAsistenciasFuncionario(idfuncionario:any, finicio: any, ffinal: any): Observable<AsistenciaModel[]> {
    return this.httpClient.get<AsistenciaModel[]>(this.urlAsistencia).pipe(
      map((resp: AsistenciaModel[])=>{
        return resp.filter(asistencias => 
          asistencias.id_funcionario === idfuncionario && new Date(asistencias.hora_registro) >= new Date(finicio) && new Date(asistencias.hora_registro) <= new Date(ffinal.getUTCFullYear(),ffinal.getUTCMonth(),ffinal.getUTCDate(),23,59,0)
        );
      })
    )
  }

  public getDescargarAsistencias(): Observable<AsistenciaModel>{
    return this.httpClient.get<AsistenciaModel>(`${this.urlAsistencia}/getattendance`).pipe(
      map(resp => {
        return resp;
      })
    )
  }
}
