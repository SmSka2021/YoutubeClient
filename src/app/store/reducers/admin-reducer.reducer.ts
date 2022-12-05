//import { getInitState, AppState } from '../state/state.models';
import { addCardAdmin } from '../actions/create-card.action';
import { createReducer, on } from '@ngrx/store';
import { initialAdminCardState, AdminCardState } from '../state/state-adminCard.models';


export const adminReducer = createReducer<AdminCardState>(
  initialAdminCardState,
  on(
    addCardAdmin, //actions
    (state, action): AdminCardState => ({
      ...state,
      adminCards: [...state.adminCards, action.card],
    }),
  ),
);

