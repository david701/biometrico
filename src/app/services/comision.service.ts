import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComisionModel } from '../models/comision';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ComisionService {

  private urlComision = 'http://192.168.150.36:5000/api/comision';

  constructor(private httpClient: HttpClient) { }
  
  public getComisiones(): Observable<ComisionModel[]>{
    return this.httpClient.get<ComisionModel[]>(this.urlComision).pipe(
      map((resp: ComisionModel[])=>{
        return resp
      })
    );
  }
  public getComision(id: string): Observable<ComisionModel[]>{
    return this.httpClient.get<ComisionModel[]>(`${this.urlComision}/${id}`);
  }
  
  public createComision(data: ComisionModel){
    return this.httpClient.post<ComisionModel[]>(`${this.urlComision}/add`, data);
  }
  public editComision(data: ComisionModel){
    return this.httpClient.put<ComisionModel[]>(`${this.urlComision}/update/${data.id}`, data);
  }

  public deleteComision(id: string): Observable<ComisionModel[]>{
    return this.httpClient.delete<ComisionModel[]>(`${this.urlComision}/delete/${id}`);
  }
}