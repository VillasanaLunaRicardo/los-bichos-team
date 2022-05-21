import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesComponent } from './inicio-ses.component';

describe('InicioSesComponent', () => {
  let component: InicioSesComponent;
  let fixture: ComponentFixture<InicioSesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioSesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
