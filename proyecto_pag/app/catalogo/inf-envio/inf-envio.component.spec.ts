import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfEnvioComponent } from './inf-envio.component';

describe('InfEnvioComponent', () => {
  let component: InfEnvioComponent;
  let fixture: ComponentFixture<InfEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfEnvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
