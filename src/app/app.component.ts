import { Component } from '@angular/core';
import { SortService } from './core/services/sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public sortService: SortService) {}

  public title = 'YouTubeClient';

}
