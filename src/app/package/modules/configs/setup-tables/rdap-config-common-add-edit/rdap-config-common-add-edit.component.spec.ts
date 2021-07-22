import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapConfigCommonAddEditComponent } from './rdap-config-common-add-edit.component';

describe('RdapConfigCommonAddEditComponent', () => {
  let component: RdapConfigCommonAddEditComponent;
  let fixture: ComponentFixture<RdapConfigCommonAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapConfigCommonAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapConfigCommonAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
