import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountmanagerRegistrationComponent } from './accountmanager-registration.component';

describe('AccountmanagerRegistrationComponent', () => {
  let component: AccountmanagerRegistrationComponent;
  let fixture: ComponentFixture<AccountmanagerRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountmanagerRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountmanagerRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
