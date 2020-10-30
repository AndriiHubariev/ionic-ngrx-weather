import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../types/actionTypes';

export const deleteAction = createAction(
    ActionTypes.DELETE,
    props<{cityname?: string}>()
);

