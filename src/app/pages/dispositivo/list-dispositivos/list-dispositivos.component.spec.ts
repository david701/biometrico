import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDispositivosComponent } from './list-dispositivos.component';

describe('ListDispositivosComponent', () => {
  let component: ListDispositivosComponent;
  let fixture: ComponentFixture<ListDispositivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDispositivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDispositivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
