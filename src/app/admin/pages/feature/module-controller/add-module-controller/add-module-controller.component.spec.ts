import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModuleControllerComponent } from './add-module-controller.component';

describe('AddModuleControllerComponent', () => {
  let component: AddModuleControllerComponent;
  let fixture: ComponentFixture<AddModuleControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModuleControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModuleControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
