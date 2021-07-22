import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapSharedBreadcrumbComponent } from './rdap-shared-breadcrumb.component';

describe('RdapSharedBreadcrumbComponent', () => {
  let component: RdapSharedBreadcrumbComponent;
  let fixture: ComponentFixture<RdapSharedBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapSharedBreadcrumbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapSharedBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
