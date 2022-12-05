import { Component } from '@angular/core';
import { SortService } from '@core/services/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './app-sort.component.html',
  styleUrls: ['./app-sort.component.scss'],
})
export class AppSortComponent {
  constructor(private sortService: SortService) {}

  public sortDayUp = true;

  public sortViewUp = true;

  public sortDayDes() {
    this.sortService.changeSortByDayDes();
    this.sortDayUp = !this.sortDayUp;
  }

  public sortDayInc() {
    this.sortService.changeSortByDayInc();
    this.sortDayUp = !this.sortDayUp;
  }

  public sortViewInc() {
    this.sortService.changeSortByViewInc();
    this.sortViewUp = !this.sortViewUp;
  }

  public sortViewDes() {
    this.sortService.changeSortByViewDes();
    this.sortViewUp = !this.sortViewUp;
  }
}



