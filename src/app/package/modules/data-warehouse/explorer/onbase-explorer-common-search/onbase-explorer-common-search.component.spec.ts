import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbaseExplorerCommonSearchComponent } from './onbase-explorer-common-search.component';

describe('OnbaseExplorerCommonSearchComponent', () => {
  let component: OnbaseExplorerCommonSearchComponent;
  let fixture: ComponentFixture<OnbaseExplorerCommonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbaseExplorerCommonSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbaseExplorerCommonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
