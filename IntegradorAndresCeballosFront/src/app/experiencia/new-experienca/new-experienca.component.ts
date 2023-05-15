import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/s-experiencia';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

@Component({
  selector: 'app-new-experienca',
  templateUrl: './new-experienca.component.html',
  styleUrls: ['./new-experienca.component.css']
})
export class NewExperiencaComponent implements OnInit{
  nombreE: string = "";
  descripcionE: string = "";
  constructor(private sExperiencia: SExperienciaService, private router: Router){

  }
  ngOnInit(): void { 
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
