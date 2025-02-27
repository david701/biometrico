import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-list-funcionarios',
  templateUrl: './list-funcionarios.component.html',
  styleUrls: ['./list-funcionarios.component.scss']
})
export class ListFuncionariosComponent implements OnInit{
  
  //FUNCINOARIO_DATA FuncionaModel[]= [];
  FUNCIONARIO_DATA: FuncionarioModel[]=[];
  public displayColumn: string[] = ['id','paterno', 'item', 'cedula', 'celular', 'fecha_ingreso', 'estado', 'Acciones']

  dataFuncionario: MatTableDataSource<FuncionarioModel>;

  public mostrar: boolean = false;
  constructor(private funcionarioService: FuncionarioService){ }

  ngOnInit(): void {
    this.listData();
  }

  listData(){
    this.funcionarioService.getFuncionarios().subscribe( funcionarios => {
      this.mostrar = true;
      this.FUNCIONARIO_DATA = funcionarios;
      this.dataFuncionario = new MatTableDataSource(this.FUNCIONARIO_DATA);
      console.log(this.dataFuncionario);
    })
  }

  buscador(event: Event){
    const valorBuscador = (event.target as HTMLInputElement).value;
    this.dataFuncionario.filter = valorBuscador.trim().toLocaleLowerCase();
  }

  eliminarFuncionario(id: string){
    this.funcionarioService.deleteFuncionario(id).subscribe(res=>{
      console.log(res)
    })
    
  }


}
