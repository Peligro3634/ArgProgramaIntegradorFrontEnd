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
  constructor(private SExperienciaService: SExperienciaService, private Router: Router){

  }
  ngOnInit(): void {
    
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.descripcionE);
    this.SExperienciaService.save(expe).subscribe(
      data=>
      
    )
  }

}
