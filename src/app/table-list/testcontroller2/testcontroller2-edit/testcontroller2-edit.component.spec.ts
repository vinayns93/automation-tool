import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller2EditComponent } from './testcontroller2-edit.component';

describe('Testcontroller2EditComponent', () => {
  let component: Testcontroller2EditComponent;
  let fixture: ComponentFixture<Testcontroller2EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller2EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller2EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
