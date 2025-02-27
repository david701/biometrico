import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDispositivosComponent } from './add-dispositivos.component';

describe('AddDispositivosComponent', () => {
  let component: AddDispositivosComponent;
  let fixture: ComponentFixture<AddDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDispositivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
