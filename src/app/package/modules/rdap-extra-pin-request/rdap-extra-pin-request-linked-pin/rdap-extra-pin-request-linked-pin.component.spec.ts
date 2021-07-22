import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapExtraPinRequestLinkedPinComponent } from './rdap-extra-pin-request-linked-pin.component';

describe('RdapExtraPinRequestLinkedPinComponent', () => {
  let component: RdapExtraPinRequestLinkedPinComponent;
  let fixture: ComponentFixture<RdapExtraPinRequestLinkedPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapExtraPinRequestLinkedPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapExtraPinRequestLinkedPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
