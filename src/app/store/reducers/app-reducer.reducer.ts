import { addCardAdmin, deleteCardAdmin } from '../actions/create-card.action';
import { createReducer, on } from '@ngrx/store';
import { AppState, getInitState } from './../state/state.models';
import { setCardsVideo, setCardVideo } from './../actions/get-video.action';
import { AdminCard } from '@shared/models/interfaces';


export const appReducer = createReducer<AppState>(
  getInitState(),
  on(
    addCardAdmin, //actions
    (state, action): AppState => ({
      ...state,
      adminCards: [...state.adminCards, action.card],
    }),
  ),
  on(
    deleteCardAdmin, //actions
    (state, action): AppState => {
      const newAdminCards = state.adminCards.filter((card: AdminCard) => card.id != action.id);
      return {
        ...state,
        adminCards: [...newAdminCards],
      };
    },
  ),
  on(
    setCardsVideo,
    (state, action): AppState => ({
      ...state,
      cardsVideo: [...action.cards],
    }),
  ),
  on(
    setCardVideo,
    (state, action): AppState => {
      return {
        ...state,
        checkedCard: action.card,
      };
    },
  ),
);

