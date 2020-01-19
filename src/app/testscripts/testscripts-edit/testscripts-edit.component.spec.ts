import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsEditComponent } from './testscripts-edit.component';

describe('TestscriptsEditComponent', () => {
  let component: TestscriptsEditComponent;
  let fixture: ComponentFixture<TestscriptsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
