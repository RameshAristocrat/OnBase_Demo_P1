import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnbaseSharedExplorerDoctypesearchComponent } from './onbase-shared-explorer-doctypesearch.component';

describe('OnbaseSharedExplorerDoctypesearchComponent', () => {
  let component: OnbaseSharedExplorerDoctypesearchComponent;
  let fixture: ComponentFixture<OnbaseSharedExplorerDoctypesearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnbaseSharedExplorerDoctypesearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnbaseSharedExplorerDoctypesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
