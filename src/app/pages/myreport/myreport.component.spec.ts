import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreportComponent } from './myreport.component';

describe('MyreportComponent', () => {
  let component: MyreportComponent;
  let fixture: ComponentFixture<MyreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
