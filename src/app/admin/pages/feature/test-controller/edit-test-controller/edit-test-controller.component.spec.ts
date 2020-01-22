import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestControllerComponent } from './edit-test-controller.component';

describe('EditTestControllerComponent', () => {
  let component: EditTestControllerComponent;
  let fixture: ComponentFixture<EditTestControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
