import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthLessonsComponent } from './youth-lessons.component';

describe('YouthLessonsComponent', () => {
  let component: YouthLessonsComponent;
  let fixture: ComponentFixture<YouthLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthLessonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouthLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
