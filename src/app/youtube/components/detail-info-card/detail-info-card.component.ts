import { Component, OnInit, OnDestroy } from '@angular/core';
import { DetailInfoCardService } from '@youtube/services/detail-info-card.service';
import { Router } from '@angular/router';
import { Subscription, switchMap, Observable } from 'rxjs';
import { OneCard } from './../../../shared/models/request.model';
import { Store } from '@ngrx/store';
import { setCardVideo } from './../../../store/actions/get-video.action';
import { selectOneCardVideo } from './../../../store/selectors/state.selector';

@Component({
  selector: 'app-detail-info-card',
  templateUrl: './detail-info-card.component.html',
  styleUrls: ['./detail-info-card.component.scss'],
})
export class DetailInfoCardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  public oneCardVideo$!: Observable<OneCard | null>;

  constructor(public detailInfoCardService: DetailInfoCardService,
    private router: Router,  private store: Store) {}

  ngOnInit(): void {
    const oneCardSub = this.detailInfoCardService.idCheckCard$.pipe(
      switchMap(idCard => this.detailInfoCardService.getDetailCheckCard(idCard)),
    ).subscribe(
      res => {
        if (typeof res !== 'number') {
          const card = res.items[0];
          this.store.dispatch(setCardVideo({ card }));
        }
      });
    this.subscriptions.push(oneCardSub);
    this.oneCardVideo$ = this.store.select(selectOneCardVideo)!;
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }

  public backHome() {
    this.router.navigate(['home']);
  }
}
