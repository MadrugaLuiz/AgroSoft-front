import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorDetalheComponent } from './gestor-detalhe.component';

describe('GestorDetalheComponent', () => {
  let component: GestorDetalheComponent;
  let fixture: ComponentFixture<GestorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GestorDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
