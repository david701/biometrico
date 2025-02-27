import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthModel } from 'src/app/models/auth';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  constructor(private loginService: LoginService, private router: Router) {
    if(loginService.getToken() != null){
      this.router.navigate(['/dashboard']);
    }
  }

  auth(form: NgForm){
    const loginForm: AuthModel = {
      cedula: form.value.usuario,
      password: form.value.password
    }
    Swal.fire({
      title: 'Espere',
      text: 'Accediendo',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;
    //console.log(loginForm);
    peticion = this.loginService.loginAuth(loginForm);
    
    peticion.subscribe(
    data=>{
      if(data.message == true){
        localStorage.setItem('session', data.token);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1000
        });
        
        this.router.navigate(['/dashboard'])
      }
      else{
        Swal.fire({
          title: data.message,
          text: 'Usuario o Contraseña incorrecta',
          icon: 'error',
        });
      }
      console.log("siiiiiii");
    },
    error=>{
      console.log(error);
      Swal.fire({
        title: error.statusText,
        text: 'Usuario o Contraseña incorrecta',
        icon: 'error',
      });
    });
  }


  sesion: any;

  logout(){
    Swal.fire({
      title: "¿Esta Seguro de Salir?",
      text: "Cerrar Sesion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "si"
    }).then((result) => {

      
      if (result.isConfirmed) {
        



        Swal.fire({
          title: "Sesion Finalizada",
          text: "Saliste de la Sesion",
          icon: "success"
        });
        //this.router.navigate(['/authentication/login'])
      }
    });
  }
  


}
