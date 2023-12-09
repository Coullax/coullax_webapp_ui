import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectCardsComponent } from './redirect-cards.component';

describe('RedirectCardsComponent', () => {
  let component: RedirectCardsComponent;
  let fixture: ComponentFixture<RedirectCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RedirectCardsComponent]
    });
    fixture = TestBed.createComponent(RedirectCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
