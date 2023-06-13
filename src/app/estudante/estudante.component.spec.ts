import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteComponent } from './estudante.component';

describe('EstudanteComponent', () => {
  let component: EstudanteComponent;
  let fixture: ComponentFixture<EstudanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudanteComponent]
    });
    fixture = TestBed.createComponent(EstudanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
