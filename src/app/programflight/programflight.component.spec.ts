import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramflightComponent } from './programflight.component';

describe('ProgramflightComponent', () => {
  let component: ProgramflightComponent;
  let fixture: ComponentFixture<ProgramflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
