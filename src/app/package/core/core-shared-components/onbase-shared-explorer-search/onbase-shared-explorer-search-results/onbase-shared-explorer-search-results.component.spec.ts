import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbaseSharedExplorerSearchResultsComponent } from './onbase-shared-explorer-search-results.component';

describe('OnbaseSharedExplorerSearchResultsComponent', () => {
  let component: OnbaseSharedExplorerSearchResultsComponent;
  let fixture: ComponentFixture<OnbaseSharedExplorerSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbaseSharedExplorerSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbaseSharedExplorerSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
