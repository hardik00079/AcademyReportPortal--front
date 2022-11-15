import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountManagerHomeComponent } from './account-manager-home.component';

describe('AccountManagerHomeComponent', () => {
  let component: AccountManagerHomeComponent;
  let fixture: ComponentFixture<AccountManagerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountManagerHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountManagerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
