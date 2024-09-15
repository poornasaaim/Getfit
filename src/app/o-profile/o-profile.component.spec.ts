import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OProfileComponent } from './o-profile.component';

describe('OProfileComponent', () => {
  let component: OProfileComponent;
  let fixture: ComponentFixture<OProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
