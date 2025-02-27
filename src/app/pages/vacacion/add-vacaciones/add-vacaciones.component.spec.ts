import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacacionesComponent } from './add-vacaciones.component';

describe('AddVacacionesComponent', () => {
  let component: AddVacacionesComponent;
  let fixture: ComponentFixture<AddVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVacacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
