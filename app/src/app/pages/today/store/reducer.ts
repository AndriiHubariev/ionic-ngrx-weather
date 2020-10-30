import { Action, createReducer, on } from '@ngrx/store';
import { changeAction } from './actions/changeCity.action';
import { takeAction } from './actions/takeCity.action';
import { TodayStateInterface } from './types/todayState.interface';

const initialState: TodayStateInterface =  {
    city: null,
};

const todayReducer = createReducer(
    initialState,

    on(takeAction, (state, action): TodayStateInterface => ({
        city: action.city
    })),

    on(changeAction, (state, action): TodayStateInterface => ({
        city: action.city
    }))
);

export function reducers(state: TodayStateInterface, action: Action): TodayStateInterface {
    return todayReducer(state, action);
  }
