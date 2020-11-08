import {Action, createReducer, on} from '@ngrx/store';
import {fatchFutureAction} from './actions/fetch.action';
import {FutureStateInterface} from './types/futureState.interface';

const initialState: FutureStateInterface = {
  data: {
    days: [],
    dates: [],
    minTemp: [],
    maxTemp: [],
    pressure: [],
    humidity: [],
    wind: []
  }
};

const futureReducer = createReducer(
  initialState,

  on(
    fatchFutureAction,
    (state, action): FutureStateInterface => ({
      ...state,
      data: {
        days: action.data.map(day => {
          return {
            ...day,
            dt: +day.dt * 1000,
          };
        }),
        dates: action.data.map(day => {
            const date = new Date(+day.dt * 1000);
            const dateString = `${date.getMonth() + 1}.${date.getDate()}`;
            return dateString;
        }),
        minTemp: action.data.map(day => day.temp.min),
        maxTemp: action.data.map(day => day.temp.max),
        pressure: action.data.map(day => day.pressure),
        humidity: action.data.map(day => day.humidity),
        wind: action.data.map(day => day.wind_speed)
      }
    })
  )
);
export function reducer(
  state: FutureStateInterface,
  action: Action
): FutureStateInterface {
  return futureReducer(state, action);
}
