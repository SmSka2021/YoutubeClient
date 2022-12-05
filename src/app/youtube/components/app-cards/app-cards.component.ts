import { Component, OnInit, OnDestroy  } from '@angular/core';
import { SortService } from '@core/services/sort.service';
import { FilterService } from '@core/services/filter.service';
import { CardsService } from '@youtube/services/cards.service';
import { Subscription, debounceTime, distinctUntilChanged, filter, switchMap, Observable } from 'rxjs';
import { DEBOUNCE_DELAY, MIN_SEARCH_LENGTH } from '@shared/models/constantItem';
import { ResponseServer, ResponseServerID } from '@shared/models/request.model';
import { Store } from '@ngrx/store';
import { setCardsVideo } from './../../../store/actions/get-video.action';
import { OneCard } from './../../../shared/models/request.model';
import { selectCardsVideos } from 'src/app/store/selectors/state.selector';
@Component({
  selector: 'app-cards',
  templateUrl: './app-cards.component.html',
  styleUrls: ['./app-cards.component.scss'],
})
export class AppCardsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  constructor(public sortService: SortService,
    public filterService: FilterService,
    public cardService: CardsService,
    private store: Store) {
  }

  public cardsVideo$!: Observable<OneCard[] | null>;

  ngOnInit(): void {
    const valItemSub = this.cardService.valueInputSearch$.pipe(
      distinctUntilChanged(),
      debounceTime(DEBOUNCE_DELAY),
      filter(val => val.length >= MIN_SEARCH_LENGTH),
      switchMap((value) => this.cardService.getVideo(value)),
    ).subscribe(
      (res: ResponseServer | number) => {
        if (typeof res !== 'number') {
          const idCards = res.items.map((card) => card.id.videoId).join(',');
          this.cardService.getVideoWithStatist(idCards).subscribe(
            (data: ResponseServerID | number) => {
              if (typeof data !== 'number') {
                const cards = data.items;
                this.store.dispatch(setCardsVideo({ cards }));
              }
            },
          );
        }
      });
    this.subscriptions.push(valItemSub);
    this.cardsVideo$ = this.store.select(selectCardsVideos)!;
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }

}
