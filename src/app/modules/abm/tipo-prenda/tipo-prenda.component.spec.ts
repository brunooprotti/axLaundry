import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPrendaComponent } from './tipo-prenda.component';

describe('TipoPrendaComponent', () => {
  let component: TipoPrendaComponent;
  let fixture: ComponentFixture<TipoPrendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPrendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPrendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
