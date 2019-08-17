import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideHeaderComponent } from './left-side-header.component';

describe('LeftSideHeaderComponent', () => {
  let component: LeftSideHeaderComponent;
  let fixture: ComponentFixture<LeftSideHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSideHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
