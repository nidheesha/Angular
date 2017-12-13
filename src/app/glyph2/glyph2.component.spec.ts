import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Glyph2Component } from './glyph2.component';

describe('Glyph2Component', () => {
  let component: Glyph2Component;
  let fixture: ComponentFixture<Glyph2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Glyph2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Glyph2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
