import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapSharedConfigSearchComponent } from './rdap-shared-config-search.component';

describe('RdapSharedConfigSearchComponent', () => {
  let component: RdapSharedConfigSearchComponent;
  let fixture: ComponentFixture<RdapSharedConfigSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapSharedConfigSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapSharedConfigSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
