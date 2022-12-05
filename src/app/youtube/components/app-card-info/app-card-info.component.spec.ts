import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCardInfoComponent } from './app-card-info.component';

describe('AppCardInfoComponent', () => {
  let component: AppCardInfoComponent;
  let fixture: ComponentFixture<AppCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCardInfoComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
