import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraineeRegistrationComponent } from './trainee-registration.component';

describe('TraineeRegistrationComponent', () => {
  let component: TraineeRegistrationComponent;
  let fixture: ComponentFixture<TraineeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraineeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraineeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
