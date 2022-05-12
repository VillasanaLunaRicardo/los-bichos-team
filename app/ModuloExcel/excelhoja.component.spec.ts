import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelhojaComponent } from './excelhoja.component';

describe('ExcelhojaComponent', () => {
  let component: ExcelhojaComponent;
  let fixture: ComponentFixture<ExcelhojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelhojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelhojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
