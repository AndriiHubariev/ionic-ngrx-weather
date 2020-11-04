
import { FutureStateInterface } from 'src/app/pages/future/store/types/futureState.interface';
import { RootStateInterface } from 'src/app/pages/root/store/types/rootState.Interface';
import { TodayStateInterface } from 'src/app/pages/today/store/types/todayState.interface';

export interface AppStateInterface {
    rootState: RootStateInterface;
    todayState: TodayStateInterface;
    futureState: FutureStateInterface;
}
