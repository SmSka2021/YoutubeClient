import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../state/state.models';


export const selectAppAtate = createFeatureSelector<AppState>('myState');

export const selectCardsVideos = createSelector(
  selectAppAtate,
  (state: AppState) => state.cardsVideo,
);

export const selectOneCardVideo = createSelector(
  selectAppAtate,
  (state: AppState) => state.checkedCard,
);

export const selectAdminCards = createSelector(
  selectAppAtate,
  (state: AppState) => state.adminCards,
);

