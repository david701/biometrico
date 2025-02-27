import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { LoginService } from 'src/app/services/login.service';
import { ComisionModel } from 'src/app/models/comision';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';
import { ComisionService } from 'src/app/services/comision.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-comisiones',
  templateUrl: './add-comisiones.component.html',
  styleUrls: ['./add-comisiones.component.scss']
})
export class AddComisionesComponent implements OnInit{


  desde: string = "";
  hasta: string = "";

  desde_hora(event: string){this.desde = event}
  hasta_hora(event: string){this.hasta = event}



  mi_data: any=[];
  constructor(private loginService: LoginService, private funcionarioService: FuncionarioService, private comisionService: ComisionService, private router: Router){

  }

  token: any;
  ver = false
  ci: any;
  funcionarioDatos: any = [];

  ngOnInit(){    
    this.token = this.loginService.getToken()
        String(this.token)
        setTimeout(() => {
          if(this.token == "undefined") {
            this.ver=true;
          }
        }, 500);

    this.ci = this.loginService.getCi()
    this.funcionarioService.getFuncionarioCi(this.ci).subscribe(res =>{
      this.funcionarioDatos = res
    })
  }

  addComision(form: NgForm){
    const comisionForm: ComisionModel = {
      tipo: form.value.tipo,
      fecha: form.value.salida,
      desde: this.desde,
      hasta: this.hasta,
      destino: form.value.destino,
      motivo: form.value.motivo,
      estado: 0,
      id_funcionario: this.funcionarioDatos.id
    }

    //console.log(comisionForm);

    Swal.fire({
      title: 'Espere',
      text: 'Guardando Comision',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();
    let peticion: Observable<any>;
    peticion = this.comisionService.createComision(comisionForm)
    
    peticion.subscribe(
    data=>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Comision Guardada",
        showConfirmButton: false,
        timer: 1500
      });      
      this.router.navigate(['dashboard/list-comisiones'])
    },
    error=>{
      console.log(error);
      Swal.fire({
        title: error.statusText,
        text: 'No se Guardo la comision',
        icon: 'error',
      });
    });
  }
}

