import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComisionesComponent } from './list-comisiones.component';

describe('ListComisionesComponent', () => {
  let component: ListComisionesComponent;
  let fixture: ComponentFixture<ListComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
