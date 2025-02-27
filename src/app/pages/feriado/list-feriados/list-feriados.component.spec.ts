import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFeriadosComponent } from './list-feriados.component';

describe('ListFeriadosComponent', () => {
  let component: ListFeriadosComponent;
  let fixture: ComponentFixture<ListFeriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFeriadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
