export interface WeatherModel {
  elevation: number;
  current_units: {
    temperature_2m: string;
    weather_code: string;
  };
  current: {
    temperature_2m: number;
    weather_code: number;
  };
  daily_units: {
    temperature_2m_min: string;
    temperature_2m_max: string;
    precipitation_probability_mean: string;
  };
  daily: {
    time: string[];
    temperature_2m_min: number[];
    temperature_2m_max: number[];
    weather_code: number[];
    precipitation_probability_mean: number[];
  };
}
