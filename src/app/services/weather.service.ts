import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { CityModel } from '../models/city.model';
import { WeatherModel } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly http = inject(HttpClient);
  private readonly URL = 'https://api.open-meteo.com/v1/forecast';

  getCities(city: string): Observable<{ results: CityModel[] }> {
    if (typeof city === 'string') {
      return this.http.get<{ results: CityModel[] }>(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
      );
    }
    return new Observable();
  }

  getForecast(city: CityModel): Observable<WeatherModel> {
    return this.http
      .get<WeatherModel>(this.URL, {
        params: {
          latitude: city.latitude,
          longitude: city.longitude,
          current: ['temperature_2m', 'weather_code'],
          daily: [
            'temperature_2m_min',
            'temperature_2m_max',
            'precipitation_probability_mean',
            'weather_code',
          ],
        },
      })
      .pipe(shareReplay());
  }
}
