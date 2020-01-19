import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller3EditComponent } from './testcontroller3-edit.component';

describe('Testcontroller3EditComponent', () => {
  let component: Testcontroller3EditComponent;
  let fixture: ComponentFixture<Testcontroller3EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller3EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller3EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
