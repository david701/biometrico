import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ComisionModel } from 'src/app/models/comision';
import { ComisionService } from 'src/app/services/comision.service';
import { BoletaComponent } from '../boleta/boleta.component';
import { LoginService } from 'src/app/services/login.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-list-comisiones',
  templateUrl: './list-comisiones.component.html',
  styleUrls: ['./list-comisiones.component.scss']
})
export class ListComisionesComponent implements OnInit{

  COMISION_DATA: ComisionModel[] = []
  displayedCmoision: string[] = ['id', 'tipo', 'fecha', 'desde', 'hasta', 'destino', 'solicitud', 'estado', 'accion']
  dataComision = new MatTableDataSource<ComisionModel>;

  mis_datos: any = [];
  token: any;
  ver = false
  ci: any;

  constructor(private comisionService: ComisionService, public dialog: MatDialog, private loginService: LoginService, private funcionarioService: FuncionarioService){
    
  }

  ngOnInit(): void {
    
    this.listComisiones();
  }

  openDialog(id_com: any) {
    const dialogRef = this.dialog.open(BoletaComponent, { data: id_com });
    dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }

  listComisiones(){
    this.funcionario();
    this.comisionService.getComisiones().subscribe(comisiones => {
      
      this.COMISION_DATA = comisiones.filter(item => item.id_funcionario === this.mis_datos['id']);
      this.dataComision = new MatTableDataSource(this.COMISION_DATA);
      //console.log(this.dataComision);
    })
  }

  funcionario(){
    this.token = this.loginService.getToken()
        String(this.token)
        setTimeout(() => {
          if(this.token == "undefined") {
            this.ver=true;
          }
        }, 500);

    this.ci = this.loginService.getCi()
    this.funcionarioService.getFuncionarioCi(this.ci).subscribe(res =>{
      this.mis_datos = res
    })
  }

  buscador(event: Event){
    const valorBuscador = (event.target as HTMLInputElement).value;
    this.dataComision.filter = valorBuscador.trim().toLocaleLowerCase();
  }
}
