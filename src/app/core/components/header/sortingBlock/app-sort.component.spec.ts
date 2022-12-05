import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSortComponent } from './app-sort.component';

describe('AppSortComponent', () => {
  let component: AppSortComponent;
  let fixture: ComponentFixture<AppSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSortComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
