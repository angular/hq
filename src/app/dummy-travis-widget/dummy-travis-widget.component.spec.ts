import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTravisWidgetComponent } from './dummy-travis-widget.component';

describe('DummyTravisWidgetComponent', () => {
  let component: DummyTravisWidgetComponent;
  let fixture: ComponentFixture<DummyTravisWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyTravisWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTravisWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
