import { Component, DestroyRef, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CityModel } from '../../models/city.model';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [AutoCompleteModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.css',
})
export class CitySelectorComponent {
  destroyRef = inject(DestroyRef);
  weatherService = inject(WeatherService);
  ref = inject(DynamicDialogRef);
  formGroup: FormGroup = new FormGroup({
    cityInput: new FormControl(''),
  });

  filteredCities: CityModel[] = [];
  selectedCountry: { name?: string; code?: number } = {};

  ngOnInit(): void {
    this.formGroup.controls['cityInput'].valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(city =>
          this.weatherService
            .getCities(city)
            .pipe(takeUntilDestroyed(this.destroyRef))
        )
      )
      .subscribe((cities: { results: CityModel[] }) => {
        this.filteredCities = cities.results ?? [];
      });
  }

  filterCountry(event: any) {
    console.log(event);
  }

  chooseCity(city: CityModel) {
    sessionStorage.setItem('city', JSON.stringify(city));
    this.ref.close();
  }
}
