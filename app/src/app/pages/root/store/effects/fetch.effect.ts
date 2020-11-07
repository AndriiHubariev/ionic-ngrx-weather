import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  fetchAction,
  fetchFeilureAction,
  fetchSuccesAction,
} from '../actions/fetch.action';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import { FetchService } from '../services/fetch/fetch.service';
import { Store } from '@ngrx/store';
import { takeAction } from 'src/app/pages/today/store/actions/takeCity.action';
import { DataResponseInetrface } from 'src/app/shered/interfaces/dataResponse.inetrface';
import { ToastService } from '../services/toast.service';

@Injectable()
export class FetchEffect {
  constructor(
    private actions$: Actions,
    private fetch: FetchService,
    private store: Store,
    private toastService: ToastService
  ) {}

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchAction),
      switchMap(({coords, cityname}) => {
        return this.fetch.getData(coords, cityname).pipe(
          map((response: DataResponseInetrface) => {
            this.store.dispatch(takeAction({city: response}));
            this.toastService.presentToast();
            return fetchSuccesAction({response});
          }),
          catchError((errors: HttpErrorResponse) =>
            of(fetchFeilureAction({errors: errors.error}))
          )
        );
      })
    )
  );
}
