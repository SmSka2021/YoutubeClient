import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class SortService {
  private sortBlockShow = new BehaviorSubject<boolean>(false);

  private sortUpDown = new BehaviorSubject<string>('descending');

  private sortBy = new BehaviorSubject<string>('views');

  public getSortBlockShowValue(): boolean {
    return this.sortBlockShow.getValue();
  }

  public setSortBlockShowValue(): void {
    this.sortBlockShow.next(!this.getSortBlockShowValue());
  }

  public getSortByValue(): string {
    return this.sortBy.getValue();
  }

  public setSortBy(val: string): void {
    this.sortBy.next(val);
  }

  public getSortUpDownValue(): string {
    return this.sortUpDown.getValue();
  }

  public setSortUpDown(val: string): void {
    this.sortUpDown.next(val);
  }

  public changeSortByDayDes(): void {
    this.setSortBy('date');
    this.setSortUpDown('descending');
  }

  public changeSortByViewDes(): void {
    this.setSortBy('views');
    this.setSortUpDown('descending');
  }

  public changeSortByDayInc(): void {
    this.setSortBy('date');
    this.setSortUpDown('increase');
  }

  public changeSortByViewInc() {
    this.setSortBy('views');
    this.setSortUpDown('increase');
  }
}
