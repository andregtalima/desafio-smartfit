import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormsComponent } from './components/forms/forms.component';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { Location } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    CommonModule,
    HeaderComponent,
    FormsComponent,
    CardsListComponent,
  ],
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: Location[] = [];

  constructor(private unitsServide: GetUnitsService) {}

  onSubmit() {
    this.unitsList = this.unitsServide.getFilteredUnits();
    this.showList.next(true);
  }
}
