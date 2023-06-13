import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EstudanteComponent } from './estudante/estudante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudanteComponent,
    EstudanteFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
