import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasofInterestComponent } from './areasof-interest.component';

describe('AreasofInterestComponent', () => {
  let component: AreasofInterestComponent;
  let fixture: ComponentFixture<AreasofInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasofInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasofInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
