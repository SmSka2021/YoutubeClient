import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminCard } from '@shared/models/interfaces';
import { Observable } from 'rxjs';
import { selectAdminCards } from 'src/app/store/selectors/state.selector';
import { deleteCardAdmin } from './../../../store/actions/create-card.action';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss'],
})
export class AdminCardsComponent implements OnInit {

  constructor(private store: Store) { }

  public adminCard$!: Observable<AdminCard[] | null>;

  ngOnInit(): void {
    this.adminCard$ = this.store.select(selectAdminCards)!;
  }

  deleteCard(id: string): void {
    this.store.dispatch(deleteCardAdmin({ id }));
  }
}

