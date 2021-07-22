import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTableHomeComponent } from './setup-table-home.component';

describe('SetupTableHomeComponent', () => {
  let component: SetupTableHomeComponent;
  let fixture: ComponentFixture<SetupTableHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTableHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTableHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
