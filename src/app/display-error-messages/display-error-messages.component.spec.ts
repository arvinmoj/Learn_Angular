import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrorMessagesComponent } from './display-error-messages.component';

describe('DisplayErrorMessagesComponent', () => {
  let component: DisplayErrorMessagesComponent;
  let fixture: ComponentFixture<DisplayErrorMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayErrorMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayErrorMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
