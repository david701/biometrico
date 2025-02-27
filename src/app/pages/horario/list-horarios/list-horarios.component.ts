import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { HorarioModel } from 'src/app/models/horario';
import { HorarioService } from 'src/app/services/horario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-horarios',
  templateUrl: './list-horarios.component.html',
  styleUrls: ['./list-horarios.component.scss'],
})
export class ListHorariosComponent implements OnInit{
  @ViewChild(MatAccordion) accordion: MatAccordion;

  //date = new FormControl(new Date());
  //serializedDate = new FormControl(new Date().toISOString());
  
  
  lunes = new FormControl(true);
  martes = new FormControl(true);
  miercoles = new FormControl(true);
  jueves = new FormControl(true);
  viernes = new FormControl(true);
  sabado = new FormControl(true);


  lunes_ent_uno: string = "";
  lunes_sal_uno: string = "";
  lunes_ent_dos: string = "";
  lunes_sal_dos: string = "";
  martes_ent_uno: string = "";
  martes_sal_uno: string = "";
  martes_ent_dos: string = "";
  martes_sal_dos: string = "";
  miercoles_ent_uno: string = "";
  miercoles_sal_uno: string = "";
  miercoles_ent_dos: string = "";
  miercoles_sal_dos: string = ""; 
  jueves_ent_uno: string = ""; 
  jueves_sal_uno: string = ""; 
  jueves_ent_dos: string = ""; 
  jueves_sal_dos: string = "";
  viernes_ent_uno: string = "";
  viernes_sal_uno: string = "";
  viernes_ent_dos: string = "";
  viernes_sal_dos: string = ""; 
  sabado_ent_uno: string = ""; 
  sabado_sal_uno: string = ""; 
  sabado_ent_dos: string = ""; 
  sabado_sal_dos: string = "";  

  public data: any[] = [];
  public leu: any = "09:00:00";
  constructor (private horarioService: HorarioService, private _formBuilder: FormBuilder){ }

  dias = this._formBuilder.group({
    lunes: 1,
    martes: 1,
    miercoles: 1,
    jueves: 1,
    viernes: 1,
    sabado: 0
  })

  lunes_entrada_uno(event: string){this.lunes_ent_uno = event}
  lunes_salida_uno(event: string){this.lunes_sal_uno = event}
  lunes_entrada_dos(event: string){this.lunes_ent_dos = event}
  lunes_salida_dos(event: string){this.lunes_sal_dos = event}
  martes_entrada_uno(event: string){this.martes_ent_uno = event}
  martes_salida_uno(event: string){this.martes_sal_uno = event}
  martes_entrada_dos(event: string){this.martes_ent_dos = event}
  martes_salida_dos(event: string){this.martes_sal_dos = event}
  miercoles_entrada_uno(event: string){this.miercoles_ent_uno = event}
  miercoles_salida_uno(event: string){this.miercoles_sal_uno = event}
  miercoles_entrada_dos(event: string){this.miercoles_ent_dos = event}
  miercoles_salida_dos(event: string){this.miercoles_sal_dos = event}
  jueves_entrada_uno(event: string){this.jueves_ent_uno = event}
  jueves_salida_uno(event: string){this.jueves_sal_uno = event}
  jueves_entrada_dos(event: string){this.jueves_ent_dos = event}
  jueves_salida_dos(event: string){this.jueves_sal_dos = event}  
  viernes_entrada_uno(event: string){this.viernes_ent_uno = event}
  viernes_salida_uno(event: string){this.viernes_sal_uno = event}
  viernes_entrada_dos(event: string){this.viernes_ent_dos = event}
  viernes_salida_dos(event: string){this.viernes_sal_dos = event}
  sabado_entrada_uno(event: string){this.sabado_ent_uno = event}
  sabado_salida_uno(event: string){this.sabado_sal_uno = event}
  sabado_entrada_dos(event: string){this.sabado_ent_dos = event}
  sabado_salida_dos(event: string){this.sabado_sal_dos = event}

  ngOnInit(): void {
    this.listHorario();
  }

  listHorario(){
    this.horarioService.getHorarios().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }

  updateHorario(form: NgForm, id: any){
    const horario: HorarioModel = {
      descripcion: form.value.descripcion,
      resolucion: form.value.resolucion,
      fecha_inicio: form.value.fecha_inicio,
      fecha_final: form.value.fecha_final,
      lunes_entrada_uno: this.lunes_ent_uno,
      lunes_salida_uno: this.lunes_sal_uno,
      lunes_entrada_dos: this.lunes_ent_dos,
      lunes_salida_dos: this.lunes_sal_dos,
      martes_entrada_uno: this.martes_ent_uno,
      martes_salida_uno: this.martes_sal_uno,
      martes_entrada_dos: this.martes_ent_dos,
      martes_salida_dos: this.martes_sal_dos,
      miercoles_entrada_uno: this.miercoles_ent_uno,
      miercoles_salida_uno: this.miercoles_sal_uno,
      miercoles_entrada_dos: this.miercoles_ent_dos,
      miercoles_salida_dos: this.miercoles_sal_dos,
      jueves_entrada_uno: this.jueves_ent_uno,
      jueves_salida_uno: this.jueves_sal_uno,
      jueves_entrada_dos: this.jueves_ent_dos,
      jueves_salida_dos: this.jueves_sal_dos,
      viernes_entrada_uno: this.viernes_ent_uno,
      viernes_salida_uno: this.viernes_sal_uno,
      viernes_entrada_dos: this.viernes_ent_dos,
      viernes_salida_dos: this.viernes_sal_dos,
      sabado_entrada_uno: this.sabado_ent_uno,
      sabado_salida_uno: this.sabado_sal_dos,
      sabado_entrada_dos: this.sabado_ent_dos,
      sabado_salida_dos: this.sabado_sal_dos,
      lunes_estado: this.dias.value.lunes? 1: 0,
      martes_estado: this.dias.value.martes? 1: 0,
      miercoles_estado: this.dias.value.miercoles? 1: 0,
      jueves_estado: this.dias.value.jueves? 1: 0,
      viernes_estado: this.dias.value.viernes? 1: 0,
      sabado_estado: this.dias.value.sabado? 1: 0,
      estado: 0
    }
    
    
    Swal.fire({
      title: "¿Esta seguro que quiere Actualizar?",
      text: "Editar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Actualizar"
    }).then((result) => {
      
      if (result.isConfirmed) {
        
        console.log(horario);
        
        this.horarioService.updateHorario(horario, id)
          .subscribe(data=>{
            Swal.fire({
              title: "¡Actualizado! ",
              text: "Se Actualizo correctamente",
              icon: "success"
            });
          },
          error=>{
            console.log(error);
            Swal.fire({
              title: error.statusText,
              text: 'No se Guardo el Horario',
              icon: 'error',
            });
          }
        
          
        );
      }
    });


  }
  
}
