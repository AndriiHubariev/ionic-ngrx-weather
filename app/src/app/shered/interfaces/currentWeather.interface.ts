export interface CurrentWeatherInterface {
    joke: string;
    name?: string;
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [{
        description: string;
        main: string;
        icon: string;
        id: number;
    }];
    wind_deg: number;
    wind_speed: number;
}
