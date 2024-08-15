import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorListaComponent } from './gestor-lista.component';

describe('GestorListaComponent', () => {
  let component: GestorListaComponent;
  let fixture: ComponentFixture<GestorListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestorListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
