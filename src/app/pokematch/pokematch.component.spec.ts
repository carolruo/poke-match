import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokematchComponent } from './pokematch.component';

describe('PokematchComponent', () => {
  let component: PokematchComponent;
  let fixture: ComponentFixture<PokematchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokematchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokematchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
