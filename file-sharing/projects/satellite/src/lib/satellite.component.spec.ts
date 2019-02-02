import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteComponent } from './satellite.component';

describe('SatelliteComponent', () => {
  let component: SatelliteComponent;
  let fixture: ComponentFixture<SatelliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatelliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatelliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
