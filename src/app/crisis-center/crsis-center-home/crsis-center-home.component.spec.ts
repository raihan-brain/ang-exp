import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsisCenterHomeComponent } from './crsis-center-home.component';

describe('CrsisCenterHomeComponent', () => {
  let component: CrsisCenterHomeComponent;
  let fixture: ComponentFixture<CrsisCenterHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrsisCenterHomeComponent],
    });
    fixture = TestBed.createComponent(CrsisCenterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
