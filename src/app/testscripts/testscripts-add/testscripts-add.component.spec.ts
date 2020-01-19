import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsAddComponent } from './testscripts-add.component';

describe('TestscriptsAddComponent', () => {
  let component: TestscriptsAddComponent;
  let fixture: ComponentFixture<TestscriptsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
