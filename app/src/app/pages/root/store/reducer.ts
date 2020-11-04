import { Action, createReducer, on } from '@ngrx/store';
import { deleteAction } from './actions/delete.action';
import { fetchAction, fetchFeilureAction, fetchSuccesAction } from './actions/fetch.action';
import { RootStateInterface } from './types/rootState.Interface';

const initialState: RootStateInterface  = {
    isLoading: false,
    weatherData: [],
    isLoaded: false,
    validationErros: null,
};

const rootReducer = createReducer(
    initialState,

    on(fetchAction, (state): RootStateInterface => ({
        ...state,
        isLoading: true,
        isLoaded: false,
        validationErros: null
    })),

    on(fetchSuccesAction, (state, action): RootStateInterface => ({
        ...state,
        isLoading: false,
        isLoaded: true,
        weatherData: [...state.weatherData, action.response],
    })),

    on(fetchFeilureAction, (state, action): RootStateInterface => ({
        ...state,
        isLoaded: false,
        validationErros: action.errors
    })),

    on(deleteAction, (state, action): RootStateInterface => ({
        ...state,
        weatherData: [...state.weatherData.filter(city => city.timezone.toLowerCase() !== action.cityname.toLowerCase())]
    }))
);
export function reducer(state: RootStateInterface, action: Action): RootStateInterface {
    return rootReducer(state, action);
  }
