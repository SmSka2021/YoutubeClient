import { Component } from '@angular/core';
import { FilterService } from '@core/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.scss'],
})
export class AppFilterComponent {
  constructor(private filterService: FilterService) {}

  public valueInput = '';

  public changeInput(value: string) {
    this.filterService.setValueInputFilter(value);
  }
}
