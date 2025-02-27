import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { FuncionarioModel } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit{
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  sesion: any;

  constructor(public dialog: MatDialog, private loginService: LoginService, private router: Router, private funcionarioService: FuncionarioService) { }

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

        this.loginService.logout()
        

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sesion Finalizada",
          showConfirmButton: false,
          timer: 1000
        });
        this.router.navigate(['/authentication/login'])
      }
    });
  }
  
}
