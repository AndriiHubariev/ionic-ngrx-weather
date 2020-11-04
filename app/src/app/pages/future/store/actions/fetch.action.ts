import { createAction, props } from '@ngrx/store';
import { DailyInterface } from 'src/app/shered/interfaces/dailyWeather.interface';
import { ActionTypes } from '../types/actionTypes';

export const fatchFutureAction = createAction(
    ActionTypes.FETCH_FUTURE,
    props<{data: DailyInterface[]}>()
);
