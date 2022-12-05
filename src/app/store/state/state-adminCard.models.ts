import { AdminCard } from '../../shared/models/interfaces';

export interface AdminCardState {
  adminCards:  AdminCard[],
}

export const initialAdminCardState: AdminCardState = {
  adminCards: [],
};
