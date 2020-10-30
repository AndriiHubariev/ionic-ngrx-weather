
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shered/interfaces/appState.interface';
import { RootStateInterface } from './types/rootState.Interface';

export const rootFutureSelector = createFeatureSelector<AppStateInterface, RootStateInterface>('rootState');

export const WeatherDataSelector = createSelector(
    rootFutureSelector,
    (rootState: RootStateInterface) => rootState.weatherData
);
export const LoadingStateSelector = createSelector(
    rootFutureSelector,
    (rootState: RootStateInterface) => rootState.isLoading
);
