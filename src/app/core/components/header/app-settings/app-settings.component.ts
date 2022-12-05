import { Component } from '@angular/core';
import { SortService } from 'src/app/core/services/sort.service';

@Component({
  selector: 'app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss'],
})
export class AppSettingsComponent {
  // @Output() public sortBlockShow: EventEmitter<void> = new EventEmitter();
  constructor(private sortService: SortService) {}

  public sortShow() {
    this.sortService.setSortBlockShowValue();
  }
}
