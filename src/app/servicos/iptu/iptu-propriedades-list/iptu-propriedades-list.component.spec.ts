import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IptuPropriedadesListComponent } from './iptu-propriedades-list.component';

describe('IptuPropriedadesListComponent', () => {
  let component: IptuPropriedadesListComponent;
  let fixture: ComponentFixture<IptuPropriedadesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IptuPropriedadesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IptuPropriedadesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
