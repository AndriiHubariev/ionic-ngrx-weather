import { CurrentWeatherInterface } from './currentWeather.interface';
import { DailyInterface } from './dailyWeather.interface';
import { HourlyWeatherInterface } from './hourlyWeather.interface';

export interface DataResponseInetrface {
    current: CurrentWeatherInterface;
    daily: DailyInterface[];
    hourly: HourlyWeatherInterface[];
    lat: number;
    lon: number;
    minutely: [];
    timezone: string;
    timezone_offset: number;
}
