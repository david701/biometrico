import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioModel } from '../models/funcionario';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private urlFuncionario = 'http://192.168.150.36:5000/api/funcionarios';

  constructor(private httpClient: HttpClient) { }
  
  public getFuncionarios(): Observable<FuncionarioModel[]>{
    return this.httpClient.get<FuncionarioModel[]>(this.urlFuncionario).pipe(
      map((resp: FuncionarioModel[])=>{
        return resp
      })
    );
  }
  public getFuncionario(id: string): Observable<FuncionarioModel[]>{
    return this.httpClient.get<FuncionarioModel[]>(`${this.urlFuncionario}/${id}`);
  }
  public getFuncionarioCi(ci: string): Observable<FuncionarioModel[]>{
    return this.httpClient.get<FuncionarioModel[]>(`${this.urlFuncionario}/cedubio/${ci}`);
  }
  public createFuncionario(data: FuncionarioModel){
    return this.httpClient.post<FuncionarioModel[]>(`${this.urlFuncionario}/add`, data);
  }
  public editFuncionario(data: FuncionarioModel){
    return this.httpClient.put<FuncionarioModel[]>(`${this.urlFuncionario}/update/${data.id}`, data);
  }



  public deleteFuncionario(id: string): Observable<FuncionarioModel[]>{
    return this.httpClient.delete<FuncionarioModel[]>(`${this.urlFuncionario}/delete/${id}`);
  }
}
