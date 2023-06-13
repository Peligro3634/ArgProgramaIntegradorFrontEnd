import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../service/s-experiencia';
import { TokenService } from '../service/token.service';
import { Experiencia } from '../model/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  expe: Experiencia[] = [];

  constructor(private sExperience: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperience.list().subscribe(
      data => { 
        this.expe = data;})   
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperience.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
