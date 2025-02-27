import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FeriadoModel } from 'src/app/models/feriado';
import { FeriadoService } from 'src/app/services/feriado.service';


@Component({
  selector: 'app-list-feriados',
  templateUrl: './list-feriados.component.html',
  styleUrls: ['./list-feriados.component.scss']
})
export class ListFeriadosComponent implements OnInit{
  FERIADO_DATA: FeriadoModel[]=[];
  displayedFeriado: string[]=['id', 'Fecha', 'Descripcion'];
  dataFeriado: MatTableDataSource<FeriadoModel>;
  constructor(private feriadoService: FeriadoService){ }

  listFeriado(){
    this.feriadoService.getFeriados().subscribe( feriados => {
      this.FERIADO_DATA = feriados;
      this.dataFeriado = new MatTableDataSource(this.FERIADO_DATA);
      console.log(this.dataFeriado);
    });
  }
  buscador(event: Event){
    const valorBuscador = (event.target as HTMLInputElement).value;
    this.dataFeriado.filter = valorBuscador.trim().toLocaleLowerCase();
  }
  ngOnInit(): void {
    this.listFeriado();
  }
  
}
