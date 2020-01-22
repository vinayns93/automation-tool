import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBrowserControllerComponent } from './edit-browser-controller.component';

describe('EditBrowserControllerComponent', () => {
  let component: EditBrowserControllerComponent;
  let fixture: ComponentFixture<EditBrowserControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBrowserControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBrowserControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
