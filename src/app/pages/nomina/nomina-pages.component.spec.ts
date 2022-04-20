import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominaPagesComponent } from './nomina-pages.component';

describe('NominaPagesComponent', () => {
  let component: NominaPagesComponent;
  let fixture: ComponentFixture<NominaPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominaPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominaPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
