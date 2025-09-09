import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroselAnunciosComponent } from './carrosel-anuncios.component';

describe('CarroselAnunciosComponent', () => {
  let component: CarroselAnunciosComponent;
  let fixture: ComponentFixture<CarroselAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarroselAnunciosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroselAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
