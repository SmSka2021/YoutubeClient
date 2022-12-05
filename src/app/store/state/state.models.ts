
import { AdminCard } from '@shared/models/interfaces';
import { OneCard } from '@shared/models/request.model';


export interface AppState {
  adminCards:  AdminCard[],
  cardsVideo: OneCard[] | null,
  checkedCard: OneCard | null,

}

export const INITIAL_STATE: AppState = {
  adminCards: [],
  cardsVideo: null,
  checkedCard: null,
};

export function getInitState(): AppState {
  return INITIAL_STATE;
}
