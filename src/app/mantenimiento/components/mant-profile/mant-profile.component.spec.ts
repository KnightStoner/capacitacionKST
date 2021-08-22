import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantProfileComponent } from './mant-profile.component';

describe('MantProfileComponent', () => {
  let component: MantProfileComponent;
  let fixture: ComponentFixture<MantProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
