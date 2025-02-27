import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComisionesComponent } from './add-comisiones.component';

describe('AddComisionesComponent', () => {
  let component: AddComisionesComponent;
  let fixture: ComponentFixture<AddComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
