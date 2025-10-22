import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLeilaoDestaqueComponent } from './list-leilao-destaque.component';

describe('ListLeilaoDestaqueComponent', () => {
  let component: ListLeilaoDestaqueComponent;
  let fixture: ComponentFixture<ListLeilaoDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListLeilaoDestaqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLeilaoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
