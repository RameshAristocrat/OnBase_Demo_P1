import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportGridComponent } from './export-grid.component';

describe('ExportGridComponent', () => {
  let component: ExportGridComponent;
  let fixture: ComponentFixture<ExportGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
