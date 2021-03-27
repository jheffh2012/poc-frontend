import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemItemComponent } from './mensagem-item.component';

describe('MensagemItemComponent', () => {
  let component: MensagemItemComponent;
  let fixture: ComponentFixture<MensagemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensagemItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
