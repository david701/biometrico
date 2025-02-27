import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVacacionesComponent } from './list-vacaciones.component';

describe('ListVacacionesComponent', () => {
  let component: ListVacacionesComponent;
  let fixture: ComponentFixture<ListVacacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVacacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
