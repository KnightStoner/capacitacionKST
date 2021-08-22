import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicaciondetalleComponent } from './aplicaciondetalle.component';

describe('AplicaciondetalleComponent', () => {
  let component: AplicaciondetalleComponent;
  let fixture: ComponentFixture<AplicaciondetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicaciondetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicaciondetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
