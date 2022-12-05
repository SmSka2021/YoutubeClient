import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoPagesComponent } from './detail-info-pages.component';

describe('DetailInfoPagesComponent', () => {
  let component: DetailInfoPagesComponent;
  let fixture: ComponentFixture<DetailInfoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInfoPagesComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailInfoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
