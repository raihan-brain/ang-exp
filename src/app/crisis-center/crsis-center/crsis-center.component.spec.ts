import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrsisCenterComponent } from './crsis-center.component';

describe('CrsisCenterComponent', () => {
  let component: CrsisCenterComponent;
  let fixture: ComponentFixture<CrsisCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrsisCenterComponent]
    });
    fixture = TestBed.createComponent(CrsisCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
