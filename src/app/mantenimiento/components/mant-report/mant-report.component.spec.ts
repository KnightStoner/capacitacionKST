import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantReportComponent } from './mant-report.component';

describe('MantReportComponent', () => {
  let component: MantReportComponent;
  let fixture: ComponentFixture<MantReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
