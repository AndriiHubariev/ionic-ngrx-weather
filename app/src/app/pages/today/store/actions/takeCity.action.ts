import { createAction, props } from '@ngrx/store';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { ActionTypes } from '../types/actionTypes';

export const takeAction = createAction(
    ActionTypes.TAKE,
    props<{city: DataResponseInetrface}>()
);
