import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AreaModel } from '../models/area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  private urlArea = 'http://192.168.150.36:5000/api/departamentos';

  constructor(private httpClient: HttpClient) { }

  public getAreas(): Observable<AreaModel[]>{
    return this.httpClient.get<AreaModel[]>(this.urlArea).pipe(
      map((resp: AreaModel[])=>{
        return resp;
      })
    )
  }
  public getArea(id: string): Observable<AreaModel[]>{
    return this.httpClient.get<AreaModel[]>(`${this.urlArea}/${id}`);
  }
}
