import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RolModel } from 'src/app/models/rol';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-list-rol',
  templateUrl: './list-rol.component.html',
  styleUrls: ['./list-rol.component.scss']
})
export class ListRolComponent implements OnInit{
  
  ROL_DATA: RolModel[] = [];
  displayedRoles: string[] = ['id', 'rol', 'dash', 'horarios', 'mult', 'fer', 'ar', 'fun', 'asign', 'mis', 'marc', 'disp', 'adr','accion']
  dataRol = new MatTableDataSource<RolModel>;

  mis_datos: any = [];
  token: any;
  ver = false
  ci: any;

  constructor(private rolService: RolService){

  }


  listRol(){
    this.rolService.getRol().subscribe(roles => {
      
      this.ROL_DATA = roles;
      this.dataRol = new MatTableDataSource(this.ROL_DATA);
      console.log(this.dataRol);
    })
  }

  ngOnInit(): void {
    this.listRol();
  }

}
