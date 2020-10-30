import { CurrentWeatherInterface } from './currentWeather.interface';
import { HourlyWeatherInterface } from './hourlyWeather.interface';

export interface DataResponseInetrface {
    current: CurrentWeatherInterface;
    daily: [];
    hourly: HourlyWeatherInterface[];
    lat: number;
    lon: number;
    minutely: [];
    timezone: string;
    timezone_offset: number;
}
