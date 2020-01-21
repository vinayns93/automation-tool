import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTestScriptComponent } from './edit-test-script.component';

describe('EditTestScriptComponent', () => {
  let component: EditTestScriptComponent;
  let fixture: ComponentFixture<EditTestScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTestScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTestScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
