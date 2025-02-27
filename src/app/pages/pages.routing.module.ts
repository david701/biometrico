import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AddFuncionarioComponent } from './funcionario/add-funcionario/add-funcionario.component';
import { ListFuncionariosComponent } from './funcionario/list-funcionarios/list-funcionarios.component';
import { ListHorariosComponent } from './horario/list-horarios/list-horarios.component';
import { AddHorariosComponent } from './horario/add-horarios/add-horarios.component';
import { AddComisionesComponent } from './comision/add-comisiones/add-comisiones.component';
import { ListComisionesComponent } from './comision/list-comisiones/list-comisiones.component';
import { ListDispositivosComponent } from './dispositivo/list-dispositivos/list-dispositivos.component';
import { AddDispositivosComponent } from './dispositivo/add-dispositivos/add-dispositivos.component';
import { AddFeriadosComponent } from './feriado/add-feriados/add-feriados.component';
import { ListFeriadosComponent } from './feriado/list-feriados/list-feriados.component';
import { AddMultasComponent } from './multa/add-multas/add-multas.component';
import { ListMultasComponent } from './multa/list-multas/list-multas.component';
import { ListVacacionesComponent } from './vacacion/list-vacaciones/list-vacaciones.component';
import { AddVacacionesComponent } from './vacacion/add-vacaciones/add-vacaciones.component';
import { AsistenciasComponent } from './asistencia/asistencias/asistencias.component';
import { PerfilFuncionarioComponent } from './funcionario/perfil-funcionario/perfil-funcionario.component';
import { AreasComponent } from './areas/areas.component';
import { EditFuncionarioComponent } from './funcionario/edit-funcionario/edit-funcionario.component';
import { AsignarHorariosComponent } from './horario/asignar-horarios/asignar-horarios.component';
import { MarcacionComponent } from './asistencia/marcacion/marcacion.component';
import { ListRolComponent } from './roles/list-rol/list-rol.component';
import { AddRolComponent } from './roles/add-rol/add-rol.component';
import { UpdateRolComponent } from './roles/update-rol/update-rol.component';

export const PagesRoutes: Routes = [
  {
    
    path: '',
    children: [
      {
        path: 'list-rol',
        component: ListRolComponent
      },
      {
        path: 'add-rol',
        component: AddRolComponent
      },
      {
        path: 'update-rol/:id',
        component: UpdateRolComponent
      },
      {
        path: 'mi-marcacion',
        component: MarcacionComponent
      },
      {
        path: 'asignar-horarios',
        component: AsignarHorariosComponent
      },
      {
        path: 'edit-funcionario/:id',
        component: EditFuncionarioComponent
      },
      {
        path: 'list-areas',
        component: AreasComponent
      },
      {
        path: 'perfil-funcionario',
        component: PerfilFuncionarioComponent
      },
      {
        path: 'asistencias',
        component: AsistenciasComponent
      },
      {
        path: 'add-vacaciones',
        component: AddVacacionesComponent
      },
      {
        path: 'list-vacaciones',
        component: ListVacacionesComponent
      },
      {
        path: 'list-multas',
        component: ListMultasComponent
      },
      {
        path: 'add-multas',
        component: AddMultasComponent
      },
      {
        path: 'list-feriados',
        component: ListFeriadosComponent
      },
      {
        path: 'add-feriados',
        component: AddFeriadosComponent
      },
      {
        path: 'add-dispositivos',
        component: AddDispositivosComponent
      },
      {
        path: 'list-dispositivos',
        component: ListDispositivosComponent
      },
      {
        path: 'list-comisiones',
        component: ListComisionesComponent
      },
      {
        path: 'add-comisiones',
        component: AddComisionesComponent
      },
      {
        path: 'list-horarios',
        component: ListHorariosComponent
      },
      {
        path: 'add-horarios',
        component: AddHorariosComponent
      },
      {
        path: 'list-funcionarios',
        component: ListFuncionariosComponent
      },
      {
        path: 'add-funcionarios',
        component: AddFuncionarioComponent
      },
      {
        path: '',
        component: AppDashboardComponent,
        data: {
          title: 'Starter Page',
        },
      }
    ],
    
  },
];
