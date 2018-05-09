import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalimagesComponent } from './thermalimages.component';

describe('ThermalimagesComponent', () => {
  let component: ThermalimagesComponent;
  let fixture: ComponentFixture<ThermalimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermalimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermalimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
