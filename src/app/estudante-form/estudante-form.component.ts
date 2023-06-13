import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.css']
})
export class EstudanteFormComponent implements OnChanges {
  
  @Input()
  estudante: Estudante = {} as Estudante;

  @Output()
  saveEvent = new EventEmitter<Estudante>();

  submitted : boolean = false;
  formGroupClient: FormGroup;

  constructor (private formBuilder : FormBuilder){

    

    this.formGroupClient = formBuilder.group({
      id : [''],
      name : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      course : ['',[Validators.required]],
      telefone : ['',[Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupClient.setValue(this.estudante);
  }

  save(){
    this.submitted = true;
    if(this.formGroupClient.valid){
      this.saveEvent.emit(this.formGroupClient.value);
      this.formGroupClient.reset();
      this.submitted = false;
    }
}

  clean(){
    this.formGroupClient.reset();
    this.submitted = false;
  }

  get name() : any {
    return this.formGroupClient.get("name");
  }

  get email() : any {
    return this.formGroupClient.get("email");
  }

  get course() : any {
    return this.formGroupClient.get("course");
  }

  get telefone() : any {
    return this.formGroupClient.get("telefone");
  }
  

}
