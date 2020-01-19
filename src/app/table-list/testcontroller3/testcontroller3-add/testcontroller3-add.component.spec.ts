import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcontroller3AddComponent } from './testcontroller3-add.component';

describe('Testcontroller3AddComponent', () => {
  let component: Testcontroller3AddComponent;
  let fixture: ComponentFixture<Testcontroller3AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testcontroller3AddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testcontroller3AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
