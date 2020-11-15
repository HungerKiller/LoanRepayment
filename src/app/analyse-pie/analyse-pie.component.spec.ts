import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysePieComponent } from './analyse-pie.component';

describe('AnalysePieComponent', () => {
  let component: AnalysePieComponent;
  let fixture: ComponentFixture<AnalysePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
