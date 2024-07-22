import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';
import { TableModule } from 'primeng/table';
import { NgFor } from '@angular/common';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';

@Component({
  selector: 'app-weather-weekly-forecast',
  standalone: true,
  imports: [TableModule, NgFor, WeatherIconComponent],
  templateUrl: './weather-weekly-forecast.component.html',
  styleUrl: './weather-weekly-forecast.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherWeeklyForecastComponent {
  private readonly DAYS = [
    'Vasárnap',
    'Hétfő',
    'Kedd',
    'Szerda',
    'Csütörtök',
    'Péntek',
    'Szombat',
  ];

  weatherData = input<WeatherModel>();

  getDay(day: string): string {
    return this.DAYS[new Date(day).getDay()];
  }
}
