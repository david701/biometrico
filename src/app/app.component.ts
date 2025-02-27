import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { FuncionarioService } from './services/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {


  constructor(){
    
  }
  
  title = 'Modernize Angular Admin Tempplate';
}
