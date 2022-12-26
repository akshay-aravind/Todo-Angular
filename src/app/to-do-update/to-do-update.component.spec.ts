import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoUpdateComponent } from './to-do-update.component';

describe('ToDoUpdateComponent', () => {
  let component: ToDoUpdateComponent;
  let fixture: ComponentFixture<ToDoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
