import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryActualityComponent } from './category-actuality.component';

describe('CategoryActualityComponent', () => {
  let component: CategoryActualityComponent;
  let fixture: ComponentFixture<CategoryActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryActualityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
