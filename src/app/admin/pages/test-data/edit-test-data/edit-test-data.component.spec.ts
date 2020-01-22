import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestDataComponent } from './edit-test-data.component';

describe('EditTestDataComponent', () => {
  let component: EditTestDataComponent;
  let fixture: ComponentFixture<EditTestDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
