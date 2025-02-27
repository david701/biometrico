import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RolModel } from '../models/rol';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlRol = 'http://192.168.150.36:5000/api/roles';

  constructor(private httpClient: HttpClient) { }

  public getRol(): Observable<RolModel[]>{
    return this.httpClient.get<RolModel[]>(this.urlRol).pipe(
      map((resp: RolModel[])=>{
        return resp;
      })
    );
  }

  

}
