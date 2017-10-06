import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyPrsCountWidgetComponent } from './dummy-prs-count-widget.component';

describe('DummyPrsCountWidgetComponent', () => {
  let component: DummyPrsCountWidgetComponent;
  let fixture: ComponentFixture<DummyPrsCountWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyPrsCountWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyPrsCountWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
