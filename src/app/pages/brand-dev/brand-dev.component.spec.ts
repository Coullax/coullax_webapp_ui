import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDevComponent } from './brand-dev.component';

describe('BrandDevComponent', () => {
  let component: BrandDevComponent;
  let fixture: ComponentFixture<BrandDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandDevComponent]
    });
    fixture = TestBed.createComponent(BrandDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
