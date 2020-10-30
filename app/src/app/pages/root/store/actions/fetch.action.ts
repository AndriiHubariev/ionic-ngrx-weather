import { createAction, props } from '@ngrx/store';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { Coords } from '../services/location/location.service';
import { ActionTypes } from '../types/actionTypes';

export const fetchAction = createAction(
    ActionTypes.FETCH,
    props<{coords?: Coords, cityname?: string}>()
);

export const fetchSuccesAction = createAction(
    ActionTypes.FETCH_SUCCES,
    props<{response: DataResponseInetrface}>()
);

export const fetchFeilureAction = createAction(
    ActionTypes.FETCH_FAILURE,
    props<{errors: any}>()
);
