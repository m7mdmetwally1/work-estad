import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWorkComponent } from './day-work.component';

describe('DayWorkComponent', () => {
  let component: DayWorkComponent;
  let fixture: ComponentFixture<DayWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
