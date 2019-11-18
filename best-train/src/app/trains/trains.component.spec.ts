import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainsComponent } from './trains.component';

describe('TrainsComponent', () => {
  let component: TrainsComponent;
  let fixture: ComponentFixture<TrainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
