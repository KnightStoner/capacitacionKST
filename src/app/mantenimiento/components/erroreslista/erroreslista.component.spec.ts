import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroreslistaComponent } from './erroreslista.component';

describe('ErroreslistaComponent', () => {
  let component: ErroreslistaComponent;
  let fixture: ComponentFixture<ErroreslistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroreslistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroreslistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
