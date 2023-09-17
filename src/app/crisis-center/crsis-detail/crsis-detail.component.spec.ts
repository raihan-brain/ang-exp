import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsisDetailComponent } from './crsis-detail.component';

describe('CrsisDetailComponent', () => {
  let component: CrsisDetailComponent;
  let fixture: ComponentFixture<CrsisDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrsisDetailComponent]
    });
    fixture = TestBed.createComponent(CrsisDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
