import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyCareTakerQueueComponent } from './dummy-care-taker-queue.component';

describe('DummyCareTakerQueueComponent', () => {
  let component: DummyCareTakerQueueComponent;
  let fixture: ComponentFixture<DummyCareTakerQueueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyCareTakerQueueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyCareTakerQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
