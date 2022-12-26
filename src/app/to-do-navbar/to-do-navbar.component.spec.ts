import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoNavbarComponent } from './to-do-navbar.component';

describe('ToDoNavbarComponent', () => {
  let component: ToDoNavbarComponent;
  let fixture: ComponentFixture<ToDoNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
