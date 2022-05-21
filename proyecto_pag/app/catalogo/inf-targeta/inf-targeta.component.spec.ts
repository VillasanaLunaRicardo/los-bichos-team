import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTargetaComponent } from './inf-targeta.component';

describe('InfTargetaComponent', () => {
  let component: InfTargetaComponent;
  let fixture: ComponentFixture<InfTargetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfTargetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfTargetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
