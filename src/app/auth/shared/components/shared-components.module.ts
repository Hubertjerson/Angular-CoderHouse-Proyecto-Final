import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AuthlayoutComponent } from './layouts/authlayout/authlayout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    WrapperComponent,
    SidenavComponent,
    AdminlayoutComponent,
    AuthlayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
