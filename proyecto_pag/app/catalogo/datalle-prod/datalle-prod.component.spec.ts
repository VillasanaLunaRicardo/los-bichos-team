import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatalleProdComponent } from './datalle-prod.component';

describe('DatalleProdComponent', () => {
  let component: DatalleProdComponent;
  let fixture: ComponentFixture<DatalleProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatalleProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatalleProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
