import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shered/interfaces/appState.interface';
import { FutureStateInterface } from './types/futureState.interface';

export const FutureFutureSelector = createFeatureSelector<AppStateInterface, FutureStateInterface>('futureState');

export const FuturerDataSelector = createSelector(
    FutureFutureSelector,
    (futureState: FutureStateInterface) => futureState.data
);
