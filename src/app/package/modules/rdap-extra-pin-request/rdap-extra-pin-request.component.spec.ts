import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDAPExtraPINRequestComponent } from './rdap-extra-pin-request.component';

describe('RDAPExtraPINRequestComponent', () => {
  let component: RDAPExtraPINRequestComponent;
  let fixture: ComponentFixture<RDAPExtraPINRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDAPExtraPINRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RDAPExtraPINRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
