import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CitySelectorComponent } from '../city-selector/city-selector.component';
import { CityModel } from '../../models/city.model';
import { WeatherModel } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';
import { WeatherIconComponent } from '../weather-icon/weather-icon.component';
import { WeatherWeeklyForecastComponent } from '../weather-weekly-forecast/weather-weekly-forecast.component';
import { WeatherStatusComponent } from '../weather-status/weather-status.component';
import { WeatherChartComponent } from '../weather-chart/weather-chart.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    Button,
    CardModule,
    DialogModule,
    WeatherChartComponent,
    WeatherIconComponent,
    WeatherStatusComponent,
    WeatherWeeklyForecastComponent,
  ],
  providers: [DialogService],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  visible: boolean = false;

  ref: DynamicDialogRef | undefined;
  destroyRef = inject(DestroyRef);
  dialogService = inject(DialogService);
  weatherService = inject(WeatherService);
  selectedCity: CityModel | undefined = undefined;
  weatherData: WeatherModel | undefined = undefined;

  ngOnInit(): void {
    this.checkStorage();
    if (!this.selectedCity) {
      this.show();
    }
  }

  show() {
    this.ref = this.dialogService.open(CitySelectorComponent, {
      header: 'Válassz egy várost',
      width: '600px',
      height: '400px',
      modal: true,
      breakpoints: {
        '960px': '50vw',
        '640px': '90vw',
      },
    });

    this.ref.onClose.subscribe((city: CityModel) => {
      this.checkStorage();
    });
  }

  checkStorage(): void {
    if (sessionStorage.length) {
      this.selectedCity = JSON.parse(sessionStorage.getItem('city')!);
      this.getForecast();
    }
  }

  getForecast(): void {
    if (this.selectedCity) {
      this.weatherService
        .getForecast(this.selectedCity)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(data => {
          this.weatherData = data;
        });
    }
  }
}
