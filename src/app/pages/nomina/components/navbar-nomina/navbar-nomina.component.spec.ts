import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNominaComponent } from './navbar-nomina.component';

describe('NavbarNominaComponent', () => {
  let component: NavbarNominaComponent;
  let fixture: ComponentFixture<NavbarNominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
