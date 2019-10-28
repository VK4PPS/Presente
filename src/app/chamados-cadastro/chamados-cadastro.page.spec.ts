import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosCadastroPage } from './chamados-cadastro.page';

describe('ChamadosCadastroPage', () => {
  let component: ChamadosCadastroPage;
  let fixture: ComponentFixture<ChamadosCadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamadosCadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamadosCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
