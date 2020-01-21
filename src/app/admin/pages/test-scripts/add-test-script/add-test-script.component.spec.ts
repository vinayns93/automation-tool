import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestScriptComponent } from './add-test-script.component';

describe('AddTestScriptComponent', () => {
  let component: AddTestScriptComponent;
  let fixture: ComponentFixture<AddTestScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTestScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTestScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
