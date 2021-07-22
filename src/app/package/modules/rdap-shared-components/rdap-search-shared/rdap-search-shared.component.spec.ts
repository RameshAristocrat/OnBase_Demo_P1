import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapSearchSharedComponent } from './rdap-search-shared.component';

describe('RdapSearchSharedComponent', () => {
  let component: RdapSearchSharedComponent;
  let fixture: ComponentFixture<RdapSearchSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapSearchSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapSearchSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
