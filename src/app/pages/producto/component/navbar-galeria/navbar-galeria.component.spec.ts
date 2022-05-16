import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGaleriaComponent } from './navbar-galeria.component';

describe('NavbarGaleriaComponent', () => {
  let component: NavbarGaleriaComponent;
  let fixture: ComponentFixture<NavbarGaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarGaleriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarGaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
