import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevSoftwareComponent } from './webdev-software.component';

describe('WebdevSoftwareComponent', () => {
  let component: WebdevSoftwareComponent;
  let fixture: ComponentFixture<WebdevSoftwareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebdevSoftwareComponent]
    });
    fixture = TestBed.createComponent(WebdevSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
