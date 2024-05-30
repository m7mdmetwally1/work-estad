import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3waFardysComponent } from './d3wa-fardys.component';

describe('D3waFardysComponent', () => {
  let component: D3waFardysComponent;
  let fixture: ComponentFixture<D3waFardysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3waFardysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(D3waFardysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
