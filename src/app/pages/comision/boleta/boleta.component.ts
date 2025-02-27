import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Dialog } from '@angular/cdk/dialog';
import { ComisionModel } from 'src/app/models/comision';
import { ActivatedRoute } from '@angular/router';
import { ListComisionesComponent } from '../list-comisiones/list-comisiones.component';
import { ComisionService } from 'src/app/services/comision.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.scss']
})
export class BoletaComponent implements OnInit{


  comision_data: any = [];
  funcionario_data: any = [];
  area_data: any = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ComisionModel,
    private dialogRef: MatDialogRef<ListComisionesComponent>, private comisionService: ComisionService, private funcionarioService: FuncionarioService, private areaService: AreaService
  ) { }


  ngOnInit(): void {
    this.mostrarComision()
  }

  mostrarComision(){
    this.comisionService.getComision(String(this.data)).subscribe(comision =>{
      this.comision_data = comision
      //console.log(this.comision_data['id_funcionario']);
      this.mostrarFuncionario(this.comision_data['id_funcionario']);
    })
  }

  mostrarFuncionario(id_func: any){
    this.funcionarioService.getFuncionario(id_func).subscribe(f => {
      this.funcionario_data = f;
      //console.log(this.funcionario_data);
      this.mostrarArea(this.funcionario_data['id_departamento'])
    })
  }

  mostrarArea(id_area: any){
    this.areaService.getArea(id_area).subscribe(a =>{
      this.area_data = a;
      //console.log(this.area_data)
    })
    
  }

  imprimir() {
  const contenido = document.getElementById('print-section')?.innerHTML;
  const ventana = window.open('', '', 'height=600, width=800');
  
  if (ventana && contenido) {
      ventana.document.write('<html><head><title>Imprimir</title></head><body>');
      ventana.document.write(contenido);
      ventana.document.write('</body></html>');
      ventana.document.close();
      ventana.print();
    }
  }

}
