import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { PagesRoutes } from './pages.routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

import { HttpClientModule } from '@angular/common/http'
// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AddFuncionarioComponent } from './funcionario/add-funcionario/add-funcionario.component';
import { ListFuncionariosComponent } from './funcionario/list-funcionarios/list-funcionarios.component';
import { ListHorariosComponent } from './horario/list-horarios/list-horarios.component';
import { AddHorariosComponent } from './horario/add-horarios/add-horarios.component';
import { AddComisionesComponent } from './comision/add-comisiones/add-comisiones.component';
import { ListComisionesComponent } from './comision/list-comisiones/list-comisiones.component';
import { AddDispositivosComponent } from './dispositivo/add-dispositivos/add-dispositivos.component';
import { ListDispositivosComponent } from './dispositivo/list-dispositivos/list-dispositivos.component';
import { AddFeriadosComponent } from './feriado/add-feriados/add-feriados.component';
import { ListFeriadosComponent } from './feriado/list-feriados/list-feriados.component';
import { AddMultasComponent } from './multa/add-multas/add-multas.component';
import { ListMultasComponent } from './multa/list-multas/list-multas.component';
import { AddVacacionesComponent } from './vacacion/add-vacaciones/add-vacaciones.component';
import { ListVacacionesComponent } from './vacacion/list-vacaciones/list-vacaciones.component';
import { AsistenciasComponent } from './asistencia/asistencias/asistencias.component';


import localeBO from '@angular/common/locales/es-BO';
import { PerfilFuncionarioComponent } from './funcionario/perfil-funcionario/perfil-funcionario.component';
import { AreasComponent } from './areas/areas.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { AsignarHorariosComponent } from './horario/asignar-horarios/asignar-horarios.component';
import { MarcacionComponent } from './asistencia/marcacion/marcacion.component';
import { BoletaComponent } from './comision/boleta/boleta.component';
import { ListRolComponent } from './roles/list-rol/list-rol.component';
import { AddRolComponent } from './roles/add-rol/add-rol.component';
import { UpdateRolComponent } from './roles/update-rol/update-rol.component';



@NgModule({
  declarations: [
    AppDashboardComponent,
    AddFuncionarioComponent,
    ListFuncionariosComponent,
    ListHorariosComponent,
    AddHorariosComponent,
    AddComisionesComponent,
    ListComisionesComponent,
    AddDispositivosComponent,
    ListDispositivosComponent,
    AddFeriadosComponent,
    ListFeriadosComponent,
    AddMultasComponent,
    ListMultasComponent,
    AddVacacionesComponent,
    ListVacacionesComponent,
    AsistenciasComponent,
    PerfilFuncionarioComponent,
    AreasComponent,
    EditFuncionarioComponent,
    AsignarHorariosComponent,
    MarcacionComponent,
    BoletaComponent,
    ListRolComponent,
    AddRolComponent,
    UpdateRolComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    RouterModule.forChild(PagesRoutes),
    TablerIconsModule.pick(TablerIcons),
    HttpClientModule
  ],
  exports: [TablerIconsModule],
})
export class PagesModule {}
