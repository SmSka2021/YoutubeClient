import { createAction, props } from '@ngrx/store';
import { OneCard } from '../../shared/models/request.model';

export enum VideoCardActions {
  SetCards = '[Video API] Fetch API Cards Success',
  SetCard = '[Video API] Fetch API One Card Success',
}

export const setCardsVideo =  createAction(VideoCardActions.SetCards, props<{ cards: OneCard[] }>());

export const setCardVideo =  createAction( VideoCardActions.SetCard, props<{ card: OneCard }>());


