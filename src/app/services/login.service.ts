import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { AuthModel } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private urlAuth = "http://192.168.150.36:5000/api/sesion";
  private ciGuard: any;

  constructor(private httpClient: HttpClient) { }

  loginAuth(auth: any): Observable<AuthModel[]>{
    return this.httpClient.post<AuthModel[]>(this.urlAuth+'/login', auth).pipe(
      map(resp => {
        this.ciGuard = resp;
        console.log(this.ciGuard['ci']);
        localStorage.setItem('ci',this.ciGuard['ci']);
        return this.ciGuard
      })
    );
  }
  getCi(){
    return localStorage.getItem('ci');
  }
  getToken(){
    return localStorage.getItem('session');
  }

  loggedIn(){
    return !!localStorage.getItem('session');
  }

  logout(){
    localStorage.removeItem('session');
    
    //this.router.navigate(['/authentication/login']);
  }
}
