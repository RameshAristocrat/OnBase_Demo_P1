import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapConfigStudioComponent } from './rdap-config-studio.component';

describe('RdapConfigStudioComponent', () => {
  let component: RdapConfigStudioComponent;
  let fixture: ComponentFixture<RdapConfigStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapConfigStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapConfigStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
