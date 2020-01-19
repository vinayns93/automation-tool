import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller2AddComponent } from './testcontroller2-add.component';

describe('Testcontroller2AddComponent', () => {
  let component: Testcontroller2AddComponent;
  let fixture: ComponentFixture<Testcontroller2AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller2AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller2AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
