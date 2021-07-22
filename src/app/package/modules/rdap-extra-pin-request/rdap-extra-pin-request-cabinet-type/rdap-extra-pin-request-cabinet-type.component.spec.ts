import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapExtraPinRequestCabinetTypeComponent } from './rdap-extra-pin-request-cabinet-type.component';

describe('RdapExtraPinRequestCabinetTypeComponent', () => {
  let component: RdapExtraPinRequestCabinetTypeComponent;
  let fixture: ComponentFixture<RdapExtraPinRequestCabinetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapExtraPinRequestCabinetTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapExtraPinRequestCabinetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
