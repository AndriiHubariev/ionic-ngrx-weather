
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shered/interfaces/appState.interface';
import { TodayStateInterface } from './types/todayState.interface';

export const todayFutureSelector = createFeatureSelector<AppStateInterface, TodayStateInterface>('todayState');

export const CurrentCitySelector = createSelector(
    todayFutureSelector,
    (todayState: TodayStateInterface) => todayState.city
);

