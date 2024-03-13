import { Component, Input } from '@angular/core';
import { Location } from '../../types/location.interface';
import { GetUnitsService } from '../../services/get-units.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.css',
  imports: [CardComponent],
})
export class CardsListComponent {
  @Input() unitsList: Location[] = [];
}
