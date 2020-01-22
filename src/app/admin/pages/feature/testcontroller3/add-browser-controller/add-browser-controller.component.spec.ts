import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBrowserControllerComponent } from './add-browser-controller.component';

describe('AddBrowserControllerComponent', () => {
  let component: AddBrowserControllerComponent;
  let fixture: ComponentFixture<AddBrowserControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBrowserControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBrowserControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
