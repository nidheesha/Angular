import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageanalyticsComponent } from './imageanalytics.component';

describe('ImageanalyticsComponent', () => {
  let component: ImageanalyticsComponent;
  let fixture: ComponentFixture<ImageanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
