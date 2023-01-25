import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Sesion } from 'src/app/auth/views/sessions/model/sesion';
import { Usuario } from 'src/app/auth/views/sessions/model/usuario';
import { SesionService } from 'src/app/auth/views/sessions/services/sesion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  usuario: Usuario;
  sesion: Sesion;

  constructor(
    private router: Router
  ) { }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut() {
    this.sesion.sesionActiva = false;
    this.router.navigate(['/sessions/login']);
  }
}
