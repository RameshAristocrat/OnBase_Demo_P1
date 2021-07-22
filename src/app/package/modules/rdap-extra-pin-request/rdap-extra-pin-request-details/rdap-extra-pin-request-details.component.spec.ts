import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapExtraPinRequestDetailsComponent } from './rdap-extra-pin-request-details.component';

describe('RdapExtraPinRequestDetailsComponent', () => {
  let component: RdapExtraPinRequestDetailsComponent;
  let fixture: ComponentFixture<RdapExtraPinRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapExtraPinRequestDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapExtraPinRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
