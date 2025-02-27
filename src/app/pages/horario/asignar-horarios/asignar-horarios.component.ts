import { Component, OnInit } from '@angular/core';
import { FuncionarioModel } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import {MatTableDataSource} from '@angular/material/table';
import { HorarioService } from 'src/app/services/horario.service';
import { HorarioModel } from 'src/app/models/horario';

@Component({
  selector: 'app-asignar-horarios',
  templateUrl: './asignar-horarios.component.html',
  styleUrls: ['./asignar-horarios.component.scss']
})
export class AsignarHorariosComponent implements OnInit{

  FUNCIONARIO_DATA: FuncionarioModel[]=[];
  public displayColumn: string[] = ['id','paterno', 'item', 'cedula', 'Acciones']

  dataFuncionario: MatTableDataSource<FuncionarioModel>;
  dataHorario: HorarioModel[]=[];

  constructor(private funcionarioService: FuncionarioService, private horarioService: HorarioService){ }

  ngOnInit(): void {
    this.listData();
    this.mostrarHorarios();
  }

  listData(){
    this.funcionarioService.getFuncionarios().subscribe( funcionarios => {
      this.FUNCIONARIO_DATA = funcionarios;
      this.dataFuncionario = new MatTableDataSource(this.FUNCIONARIO_DATA);
      console.log(this.dataFuncionario);
    })
  }


  mostrarHorarios(): void{
    this.horarioService.getHorarios().subscribe(data=>{
      this.dataHorario = data;
      console.log(this.dataHorario);
    })
  }

  buscador(event: Event){
    const valorBuscador = (event.target as HTMLInputElement).value;
    this.dataFuncionario.filter = valorBuscador.trim().toLocaleLowerCase();
  }

}
