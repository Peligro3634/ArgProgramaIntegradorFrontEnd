import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './header/logo-ap/logo-ap.component';
import { SocialComponent } from './header/social/social.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
