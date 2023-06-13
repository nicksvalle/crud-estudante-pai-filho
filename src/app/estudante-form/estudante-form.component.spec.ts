import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteFormComponent } from './estudante-form.component';

describe('EstudanteFormComponent', () => {
  let component: EstudanteFormComponent;
  let fixture: ComponentFixture<EstudanteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudanteFormComponent]
    });
    fixture = TestBed.createComponent(EstudanteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
