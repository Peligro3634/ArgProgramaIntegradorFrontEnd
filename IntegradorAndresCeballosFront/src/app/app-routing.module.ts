import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewExperiencaComponent } from './experiencia/new-experienca/new-experienca.component';
import { EditExperienciaComponent } from './experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './educacion/new-educacion/new-educacion.component';
import { EditeducacionComponent } from './educacion/edit-educacion/edit-educacion.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperiencaComponent},
  {path:'editExperiencia/:id', component: EditExperienciaComponent},
  {path:'nuevaedu', component: NeweducacionComponent},
  {path:'editEducacion/:id', component: EditeducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
