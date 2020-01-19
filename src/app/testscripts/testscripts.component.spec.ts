import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscriptsComponent } from './testscripts.component';

describe('TestscriptsComponent', () => {
  let component: TestscriptsComponent;
  let fixture: ComponentFixture<TestscriptsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscriptsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
