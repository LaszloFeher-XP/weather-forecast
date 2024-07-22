import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-weather-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather-status.component.html',
  styleUrl: './weather-status.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherStatusComponent {
  wmo = input<number>();

  get weatherStatus(): string {
    switch (this.wmo()) {
      case 0:
        return 'Tiszta idő';
      case 1:
        return 'Többnyire derült';
      case 2:
        return 'Részben felhős';
      case 3:
        return 'Borult idő';
      case 45:
        return 'Köd';
      case 48:
        return 'Lerakódó köd';
      case 51:
        return 'Enyhe szitálás';
      case 53:
        return 'Közepes szitálás';
      case 55:
        return 'Erős szitálás';
      case 56:
        return 'Könnyű fagyos zitálás';
      case 57:
        return 'Sűrű fagyos zitálás';
      case 61:
        return 'Enyhe eső';
      case 63:
        return 'Közepes intenzitású eső';
      case 65:
        return 'Erős intenzitású eső';
      case 66:
        return 'Havaseső';
      case 67:
        return 'Erős havaseső';
      case 71:
        return 'Enyhe hóesés';
      case 73:
        return 'Közepes intenzitású hóesés';
      case 75:
        return 'Erős intenzitású hóesés';
      case 77:
        return 'Hószállíingózás';
      case 80:
        return 'Enyhe zápor';
      case 81:
        return 'Közepes intenzitású zápor';
      case 82:
        return 'Erős intenzitású zápor';
      case 85:
        return 'Enyhe hózápor';
      case 86:
        return 'Erős intenzitású hózápor';
      case 95:
        return 'Zivatar';
      case 96:
        return 'Zivatar enyhe jégesővel';
      case 99:
        return 'Zivatar erős jégesővel';
      default:
        return '';
    }
  }
}
