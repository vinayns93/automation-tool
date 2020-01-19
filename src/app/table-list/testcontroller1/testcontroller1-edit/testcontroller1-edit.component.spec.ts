import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller1EditComponent } from './testcontroller1-edit.component';

describe('Testcontroller1EditComponent', () => {
  let component: Testcontroller1EditComponent;
  let fixture: ComponentFixture<Testcontroller1EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller1EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
