import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapConfigStudioSearchComponent } from './rdap-config-studio-search.component';

describe('RdapConfigStudioSearchComponent', () => {
  let component: RdapConfigStudioSearchComponent;
  let fixture: ComponentFixture<RdapConfigStudioSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapConfigStudioSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapConfigStudioSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
