import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapExtraPinRequestGameTitleComponent } from './rdap-extra-pin-request-game-title.component';

describe('RdapExtraPinRequestGameTitleComponent', () => {
  let component: RdapExtraPinRequestGameTitleComponent;
  let fixture: ComponentFixture<RdapExtraPinRequestGameTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapExtraPinRequestGameTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapExtraPinRequestGameTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
