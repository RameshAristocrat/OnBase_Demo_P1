import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbaseSharedExplorerSearchComponent } from './onbase-shared-explorer-search.component';

describe('OnbaseSharedExplorerSearchComponent', () => {
  let component: OnbaseSharedExplorerSearchComponent;
  let fixture: ComponentFixture<OnbaseSharedExplorerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbaseSharedExplorerSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbaseSharedExplorerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
