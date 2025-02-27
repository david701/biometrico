import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeriadosComponent } from './add-feriados.component';

describe('AddFeriadosComponent', () => {
  let component: AddFeriadosComponent;
  let fixture: ComponentFixture<AddFeriadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeriadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFeriadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
