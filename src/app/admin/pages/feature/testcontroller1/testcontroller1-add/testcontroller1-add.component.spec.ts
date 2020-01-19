import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller1AddComponent } from './testcontroller1-add.component';

describe('Testcontroller1AddComponent', () => {
  let component: Testcontroller1AddComponent;
  let fixture: ComponentFixture<Testcontroller1AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller1AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller1AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
