
import { DailyInterface } from 'src/app/shered/interfaces/dailyWeather.interface';

export interface FutureStateInterface {
    data: {
        days: DailyInterface[] | [];
        dates: string[] | [];
        minTemp: number[] | [];
        maxTemp: number[] | [];
        pressure: number[] | [];
        humidity: number[] | [];
    };
}
