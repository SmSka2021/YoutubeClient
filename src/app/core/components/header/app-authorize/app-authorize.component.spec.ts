import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAuthorizeComponent } from './app-authorize.component';

describe('AppAuthorizeComponent', () => {
  let component: AppAuthorizeComponent;
  let fixture: ComponentFixture<AppAuthorizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAuthorizeComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(AppAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
