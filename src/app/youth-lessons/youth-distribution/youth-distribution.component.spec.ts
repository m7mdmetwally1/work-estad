import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthDistributionComponent } from './youth-distribution.component';

describe('YouthDistributionComponent', () => {
  let component: YouthDistributionComponent;
  let fixture: ComponentFixture<YouthDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YouthDistributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YouthDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
