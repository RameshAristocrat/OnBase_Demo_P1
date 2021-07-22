import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdapConfigMarketSearchComponent } from './rdap-config-market-search.component';

describe('RdapConfigMarketSearchComponent', () => {
  let component: RdapConfigMarketSearchComponent;
  let fixture: ComponentFixture<RdapConfigMarketSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdapConfigMarketSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdapConfigMarketSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
