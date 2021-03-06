import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenkaComponent } from './penka.component';

describe('PenkaComponent', () => {
  let component: PenkaComponent;
  let fixture: ComponentFixture<PenkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
