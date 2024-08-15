import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDetalheComponent } from './vendedor-detalhe.component';

describe('VendedorDetalheComponent', () => {
  let component: VendedorDetalheComponent;
  let fixture: ComponentFixture<VendedorDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendedorDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendedorDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
