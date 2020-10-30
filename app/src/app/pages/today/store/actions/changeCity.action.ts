import { createAction, props} from '@ngrx/store';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { ActionTypes } from '../types/actionTypes';

export const changeAction = createAction(
    ActionTypes.CHANGE,
    props<{city: DataResponseInetrface}>()
    );
