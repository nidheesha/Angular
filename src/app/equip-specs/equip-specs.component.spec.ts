import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipSpecsComponent } from './equip-specs.component';

describe('EquipSpecsComponent', () => {
  let component: EquipSpecsComponent;
  let fixture: ComponentFixture<EquipSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
