import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultasComponent } from './add-multas.component';

describe('AddMultasComponent', () => {
  let component: AddMultasComponent;
  let fixture: ComponentFixture<AddMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
