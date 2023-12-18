import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtModelComponent } from './art-model.component';

describe('ArtModelComponent', () => {
  let component: ArtModelComponent;
  let fixture: ComponentFixture<ArtModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtModelComponent]
    });
    fixture = TestBed.createComponent(ArtModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
