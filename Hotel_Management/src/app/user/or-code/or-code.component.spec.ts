import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrCodeComponent } from './or-code.component';

describe('OrCodeComponent', () => {
  let component: OrCodeComponent;
  let fixture: ComponentFixture<OrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrCodeComponent]
    });
    fixture = TestBed.createComponent(OrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
