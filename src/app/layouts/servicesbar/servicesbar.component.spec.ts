import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesbarComponent } from './servicesbar.component';

describe('ServicesbarComponent', () => {
  let component: ServicesbarComponent;
  let fixture: ComponentFixture<ServicesbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesbarComponent]
    });
    fixture = TestBed.createComponent(ServicesbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
