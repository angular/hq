import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyCircleCiWidgetComponent } from './dummy-circle-ci-widget.component';

describe('DummyCircleCiWidgetComponent', () => {
  let component: DummyCircleCiWidgetComponent;
  let fixture: ComponentFixture<DummyCircleCiWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyCircleCiWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyCircleCiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
