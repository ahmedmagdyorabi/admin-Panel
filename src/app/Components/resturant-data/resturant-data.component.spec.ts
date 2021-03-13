import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantDataComponent } from './resturant-data.component';

describe('ResturantDataComponent', () => {
  let component: ResturantDataComponent;
  let fixture: ComponentFixture<ResturantDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
