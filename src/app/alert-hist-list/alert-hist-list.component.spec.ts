import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertHistListComponent } from './alert-hist-list.component';

describe('AlertHistListComponent', () => {
  let component: AlertHistListComponent;
  let fixture: ComponentFixture<AlertHistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertHistListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertHistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
