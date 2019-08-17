import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideHeaderComponent } from './right-side-header.component';

describe('RightSideHeaderComponent', () => {
  let component: RightSideHeaderComponent;
  let fixture: ComponentFixture<RightSideHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightSideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
