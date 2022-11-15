import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeHomeComponent } from './trainee-home.component';

describe('TraineeHomeComponent', () => {
  let component: TraineeHomeComponent;
  let fixture: ComponentFixture<TraineeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
