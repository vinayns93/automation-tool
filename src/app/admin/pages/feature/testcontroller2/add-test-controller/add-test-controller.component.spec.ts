import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestControllerComponent } from './add-test-controller.component';

describe('AddTestControllerComponent', () => {
  let component: AddTestControllerComponent;
  let fixture: ComponentFixture<AddTestControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
