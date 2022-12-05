import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePagesComponent } from './youtube-pages.component';

describe('YoutubePagesComponent', () => {
  let component: YoutubePagesComponent;
  let fixture: ComponentFixture<YoutubePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubePagesComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(YoutubePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
