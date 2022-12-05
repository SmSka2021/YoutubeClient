import { OneCard } from '@shared/models/request.model';


export interface VideoCardState  {
  cardsVideo: OneCard[],
  checkedCard: OneCard | null,
}

export const initialVideoCardState = {
  cardsVideo: [],
  checkedCard: null,
};
