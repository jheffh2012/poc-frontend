import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMensagemComponent } from './list-mensagem.component';

describe('ListMensagemComponent', () => {
  let component: ListMensagemComponent;
  let fixture: ComponentFixture<ListMensagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMensagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
