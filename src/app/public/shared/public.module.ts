import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
