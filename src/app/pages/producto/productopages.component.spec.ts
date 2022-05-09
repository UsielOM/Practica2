import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductopagesComponent } from './productopages.component';

describe('ProductopagesComponent', () => {
  let component: ProductopagesComponent;
  let fixture: ComponentFixture<ProductopagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductopagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductopagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
