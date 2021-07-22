import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapConfigCommonSearchComponent } from './rdap-config-common-search.component';

describe('RdapConfigCommonSearchComponent', () => {
  let component: RdapConfigCommonSearchComponent;
  let fixture: ComponentFixture<RdapConfigCommonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapConfigCommonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapConfigCommonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
