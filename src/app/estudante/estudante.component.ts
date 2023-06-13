import { FormBuilder, FormGroup } from '@angular/forms';
import { EstudanteService } from '../estudante.service';
import { Estudante } from './../estudante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudantes : Estudante[] = [];
  estudante : Estudante = {} as Estudante;
  isEditing : boolean = false;

  constructor (private estudanteService : EstudanteService){
  }

  ngOnInit(): void {
    this.loadEstudante();
  }

  loadEstudante() {
    this.estudanteService.getEstudante().subscribe(
      {
        next : data => this.estudantes = data
      }
      );
  }

  OnSaveEvent(estudante: Estudante){
    if(this.isEditing)
    {
      this.estudanteService.update(estudante).subscribe(
        {
          next: () => {
            this.loadEstudante();
            this.isEditing = false;
          }
        }
      )
    }
    else{
      this.estudanteService.save(estudante).subscribe(
        {
          next: data => {
            this.estudantes.push(data);
          }
        }
        );
    }
 }

  

  edit(estudante : Estudante){
    this.estudante = estudante;
    this.isEditing = true;
  }

  delete(estudante : Estudante){
    this.estudanteService.delete(estudante).subscribe({
      next: () => this.loadEstudante()
    })
  }

}