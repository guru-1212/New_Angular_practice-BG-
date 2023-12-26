import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpracticeComponent } from './bpractice.component';

describe('BpracticeComponent', () => {
  let component: BpracticeComponent;
  let fixture: ComponentFixture<BpracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpracticeComponent]
    });
    fixture = TestBed.createComponent(BpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
