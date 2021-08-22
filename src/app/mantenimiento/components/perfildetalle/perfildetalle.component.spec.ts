import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildetalleComponent } from './perfildetalle.component';

describe('PerfildetalleComponent', () => {
  let component: PerfildetalleComponent;
  let fixture: ComponentFixture<PerfildetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfildetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
