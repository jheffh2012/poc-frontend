import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuPropriedadeItemComponent } from './iptu-propriedade-item.component';

describe('IptuPropriedadeItemComponent', () => {
  let component: IptuPropriedadeItemComponent;
  let fixture: ComponentFixture<IptuPropriedadeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptuPropriedadeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuPropriedadeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
