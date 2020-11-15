import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseAllComponent } from './analyse-all.component';

describe('AnalyseAllComponent', () => {
  let component: AnalyseAllComponent;
  let fixture: ComponentFixture<AnalyseAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
