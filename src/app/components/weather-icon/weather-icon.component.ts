import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-icon.component.html',
  styleUrl: './weather-icon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherIconComponent {
  wmo = input<number>();

  get weatherIcon(): string {
    switch (this.wmo()) {
      case 0:
        return 'wi wi-day-sunny';
      case 1:
        return 'wi wi-day-cloudy';
      case 2:
        return 'wi wi-day-cloudy-gusts';
      case 3:
        return 'wi wi-day-sunny-overcast';
      case 45:
        return 'wi wi-day-fog';
      case 48:
        return 'wi wi-day-haze';
      case 51:
        return 'wi wi-day-sprinkle';
      case 53:
        return 'wi wi-day-sprinkle';
      case 55:
        return 'wi wi-day-hail';
      case 56:
        return 'wi wi-day-hail';
      case 57:
        return 'wi wi-day-rain-wind';
      case 61:
        return 'wi wi-day-rain';
      case 63:
        return 'wi wi-day-showers';
      case 65:
        return 'wi wi-day-showers';
      case 66:
        return 'wi wi-day-sleet';
      case 67:
        return 'wi wi-day-sleet';
      case 71:
        return 'wi wi-day-rain-mix';
      case 73:
        return 'wi wi-day-sleet';
      case 75:
        return 'wi wi-day-snow';
      case 77:
        return 'wi wi-day-snow';
      case 80:
        return 'wi wi-day-storm-showers';
      case 81:
        return 'wi wi-day-storm-showers';
      case 82:
        return 'wi wi-day-storm-showers';
      case 85:
        return 'wi wi-day-snow-thunderstorm';
      case 86:
        return 'wi wi-day-snow-thunderstorm';
      case 95:
        return 'wi wi-day-thunderstorm';
      case 96:
        return 'wi wi-day-thunderstorm';
      case 99:
        return 'wi wi-day-thunderstorm';
      default:
        return '';
    }
  }
}
