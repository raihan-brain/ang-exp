import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CririsListComponent } from './criris-list.component';

describe('CririsListComponent', () => {
  let component: CririsListComponent;
  let fixture: ComponentFixture<CririsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CririsListComponent]
    });
    fixture = TestBed.createComponent(CririsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
