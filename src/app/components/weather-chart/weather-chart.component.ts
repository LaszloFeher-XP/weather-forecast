import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { WeatherModel } from '../../models/weather.model';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-weather-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './weather-chart.component.html',
  styleUrl: './weather-chart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherChartComponent implements OnInit, OnChanges {
  weatherData = input<WeatherModel>();
  _weatherData: WeatherModel | undefined;
  chart: Chart | undefined = undefined;

  ngOnInit(): void {
    this.createChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._weatherData = changes['weatherData']['currentValue'];
    this.addData();
  }

  createChart() {
    this.chart = new Chart('temperatures', {
      type: 'line',
      data: {
        labels: [],
        datasets: [
          {
            label: 'maximum',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 99, 132)',
            tension: 0.5,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  addData() {
    if (this.chart) {
      this.chart.data.labels = this._weatherData?.daily.time;
      this.chart.data.datasets[0].data =
        this._weatherData?.daily.temperature_2m_max!;
      this.chart.update();
    }
  }
}
