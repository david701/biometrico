import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMultasComponent } from './list-multas.component';

describe('ListMultasComponent', () => {
  let component: ListMultasComponent;
  let fixture: ComponentFixture<ListMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
