import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTComponent } from './grid-t.component';

describe('GridTComponent', () => {
  let component: GridTComponent;
  let fixture: ComponentFixture<GridTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
