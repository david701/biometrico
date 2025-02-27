import { Component, ElementRef, EventEmitter, Input, OnInit, Output, VERSION, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Value } from 'sass';
import { AreaModel } from 'src/app/models/area';
import { FuncionarioModel } from 'src/app/models/funcionario';
import { RolModel } from 'src/app/models/rol';
import { AreaService } from 'src/app/services/area.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { RolService } from 'src/app/services/rol.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.scss']
})
export class EditFuncionarioComponent implements OnInit{

  public funcionario: any = [];

  areas_data: AreaModel[] = [];
  rol_data: RolModel[] = [];

  fecha_n: FormControl = new FormControl;
  fecha_i: FormControl = new FormControl;
  fecha_b: FormControl = new FormControl;

  paternoControl: FormControl = new FormControl();
  maternoControl: FormControl = new FormControl();
  nombreControl: FormControl = new FormControl();
  passwordControl: FormControl = new FormControl();
  pinControl: FormControl = new FormControl();
  itemControl: FormControl = new FormControl();
  cedulaControl: FormControl = new FormControl();
  fecha_nacimientoControl: FormControl = new FormControl();
  generoControl: FormControl = new FormControl();
  fecha_ingresoControl: FormControl = new FormControl();
  fecha_bajaControl: FormControl = new FormControl();
  direccionControl: FormControl = new FormControl();
  celularControl: FormControl = new FormControl();
  fotoControl: FormControl = new FormControl();
  cargoControl: FormControl = new FormControl();
  haber_mensualControl: FormControl = new FormControl();
  hijosControl: FormControl = new FormControl();
  id_departamentoControl: FormControl = new FormControl();
  id_rolControl: FormControl = new FormControl();
  estadoControl: FormControl = new FormControl();

  genero: String = "";
  areaid: String = "";
  rolid: String = "";

  @ViewChild('avatarImg', { static: true }) avatarImgElement: ElementRef;
  @Input() photo: string;
  @Output() photoUpdated = new EventEmitter<string>();
  showAddPhotoOverlay = false;
  

  constructor(private funcionarioService: FuncionarioService, private routeActivated: ActivatedRoute, private router: Router, private areaService: AreaService, private rolService: RolService){}

  id: any = this.routeActivated.snapshot.paramMap.get('id');

  events: string = "";

  f_nac(event: MatDatepickerInputEvent<Date>){
    this.events = (`${event.value}`);
    console.log(this.events)
  }
  

  updateFuncionario(form: NgForm){

    var fecha_nacimiento: String = "";
    if(this.events == ""){
      fecha_nacimiento = new Date(this.funcionario['fecha_nacimiento']).toUTCString();
    }
    else{
      fecha_nacimiento = String(this.events);
    }
    var estadoF: number = 0;
    if(this.estadoControl.value == true || this.estadoControl.value == 1){
      estadoF = 1;
    }
    const funcionarioForm: FuncionarioModel = {
      id: this.funcionario['id'],
      paterno: this.paternoControl.value,
      materno: this.maternoControl.value,
      nombre: this.nombreControl.value,
      password: this.passwordControl.value,
      pin: this.pinControl.value,
      item: this.itemControl.value,
      cedula: this.cedulaControl.value,
      fecha_nacimiento: this.fecha_n.value.toUTCString(), 
      genero: this.generoControl.value,
      fecha_ingreso: this.fecha_i.value.toUTCString(),
      fecha_baja: this.fecha_b.value.toUTCString(),
      direccion: this.direccionControl.value,
      celular: this.celularControl.value,
      foto: '',
      cargo: this.cargoControl.value,
      haber_mensual: this.haber_mensualControl.value,
      hijos: this.hijosControl.value,
      id_departamento: form.value.id_area,
      id_rol: form.value.id_rol,
      estado: estadoF
    };
    
    console.log(funcionarioForm);

    Swal.fire({
      title: "Actualizar",
      text: "¿Quieres Guardar los Cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.funcionarioService.editFuncionario(funcionarioForm).subscribe({
          next: (resp)=>{
            console.log(resp)
          },
          error: (er)=>{
            console.log(er);
          }
        });
        Swal.fire("Actualizado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Cambios no Guardados", "", "info");
      }
    });
  }

  

  

  ngOnInit(): void {
    this.funcionarioService.getFuncionario(this.id).subscribe(resp => {
      this.funcionario = resp;
      this.paternoControl.setValue(this.funcionario['paterno']);
      this.maternoControl.setValue(this.funcionario['materno']);
      this.nombreControl.setValue(this.funcionario['nombre']);
      this.passwordControl.setValue(this.funcionario['password']);
      this.pinControl.setValue(this.funcionario['pin']);
      this.itemControl.setValue(this.funcionario['item']);
      this.cedulaControl.setValue(this.funcionario['cedula']);
      this.fecha_nacimientoControl.setValue(this.funcionario['fecha_nacimiento']); 
      this.generoControl.setValue(this.funcionario['genero']);
      this.fecha_ingresoControl.setValue(this.funcionario['fecha_ingreso']);
      this.fecha_bajaControl.setValue(this.funcionario['fecha_baja']);
      this.direccionControl.setValue(this.funcionario['direccion']);
      this.celularControl.setValue(this.funcionario['celular']);
      this.fotoControl.setValue(this.funcionario['foto']);
      this.cargoControl.setValue(this.funcionario['cargo']);
      this.haber_mensualControl.setValue(this.funcionario['haber_mensual']);
      this.hijosControl.setValue(this.funcionario['hijos']);
      this.id_departamentoControl.setValue(this.funcionario['id_departamento']);
      this.id_rolControl.setValue(this.funcionario['id_rol']);
      this.estadoControl.setValue(this.funcionario['estado']);


      var fechanac = new Date(this.funcionario['fecha_nacimiento']);
      this.fecha_n = new FormControl(new Date(fechanac.getUTCFullYear(),fechanac.getUTCMonth(), fechanac.getUTCDate()));
      this.genero = this.funcionario['genero'];
      var fechai = new Date(this.funcionario['fecha_ingreso']);
      this.fecha_i = new FormControl(new Date(fechai.getUTCFullYear(),fechai.getUTCMonth(), fechai.getUTCDate()));
      var fechab = new Date(this.funcionario['fecha_baja']);
      this.fecha_b = new FormControl(new Date(fechab.getUTCFullYear(),fechab.getUTCMonth(), fechab.getUTCDate()));
      this.areaid = this.funcionario['id_departamento'];
      this.rolid = this.funcionario['id_rol'];
    });
    this.listAreas();
    this.listRoles();
  }
  
  listAreas(){
    this.areaService.getAreas().subscribe(areas => {
      this.areas_data = areas;
    });
  }

  listRoles(){
    this.rolService.getRol().subscribe(rol =>{
      this.rol_data = rol;
    });
  }


  //subir foto
  agregarFoto(event: any) {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      this.avatarImgElement.nativeElement.src = fileReader.result;
    };
    fileReader.readAsDataURL(event.target.files[0]);
    // save the image in the back end database
    // and get the photo url
    this.photo = 'xxxx';
    this.photoUpdated.emit(this.photo);
  }

  abrirArchivoInput(fileInput: any){
    fileInput.click()
    this.showAddPhotoOverlay=false
  }

  eleminarFoto() {
    this.avatarImgElement.nativeElement.src = '';
    this.photo = '';
    this.photoUpdated.emit(this.photo);
  }

}
