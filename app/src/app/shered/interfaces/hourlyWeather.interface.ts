export interface HourlyWeatherInterface {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  pop: number;
  weather: [
      {
        id: number
        main: string
        description: string
        icon: string
      }
  ];
}
