import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrematadosComponent } from './arrematados.component';

describe('ArrematadosComponent', () => {
  let component: ArrematadosComponent;
  let fixture: ComponentFixture<ArrematadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrematadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrematadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
