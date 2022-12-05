import { createAction, props } from '@ngrx/store';
import { AdminCard } from '@shared/models/interfaces';


export enum AdminActions {
  AddCard = '[CreateCard Component] AddCardAdmin',
  DeleteCard = '[CreateCard Component] DeleteCardAdmin',
}

export const addCardAdmin = createAction('[CreateCard Component] AddCardAdmin', props<{ card: AdminCard }>());
export const deleteCardAdmin = createAction('[CreateCard Component] DeleteCardAdmin', props<{ id: string }>());





