import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapSharedConfigSetuptableAddeditComponent } from './rdap-shared-config-setuptable-addedit.component';

describe('RdapSharedConfigSetuptableAddeditComponent', () => {
  let component: RdapSharedConfigSetuptableAddeditComponent;
  let fixture: ComponentFixture<RdapSharedConfigSetuptableAddeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapSharedConfigSetuptableAddeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapSharedConfigSetuptableAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
