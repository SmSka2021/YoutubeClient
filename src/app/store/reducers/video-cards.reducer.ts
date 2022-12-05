import { createReducer, on } from '@ngrx/store';
import { initialVideoCardState, VideoCardState } from '../state/state-videoCard.model';
import { setCardsVideo } from './../actions/get-video.action';



export const videoCardsReducer = createReducer<VideoCardState>(
  initialVideoCardState,
  on(
    setCardsVideo,
    (state, action): VideoCardState => ({
      ...state,
      cardsVideo: [...action.cards],
    }),
  ),
);

