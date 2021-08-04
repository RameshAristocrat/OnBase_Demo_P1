import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdOktaCallbackComponent } from './rd-okta-callback.component';

describe('RdOktaCallbackComponent', () => {
  let component: RdOktaCallbackComponent;
  let fixture: ComponentFixture<RdOktaCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdOktaCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdOktaCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
