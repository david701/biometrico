import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { FeriadoModel } from '../models/feriado';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  private urlFeriado = 'http://192.168.150.36:5000/api/feriados';

  constructor(private httpClient: HttpClient) { }

  public getFeriados(): Observable<FeriadoModel[]>{
    return this.httpClient.get<FeriadoModel[]>(this.urlFeriado).pipe(
      map((resp: FeriadoModel[])=>{
        return resp
      })
    );
  } 
}
