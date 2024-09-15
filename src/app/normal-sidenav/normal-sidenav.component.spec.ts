import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalSidenavComponent } from './normal-sidenav.component';

describe('NormalSidenavComponent', () => {
  let component: NormalSidenavComponent;
  let fixture: ComponentFixture<NormalSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
