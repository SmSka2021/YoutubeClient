import { Component, Input } from '@angular/core';
import { OneCard } from '../../../shared/models/request.model';

@Component({
  selector: 'app-card-info',
  templateUrl: './app-card-info.component.html',
  styleUrls: ['./app-card-info.component.scss'],
})
export class AppCardInfoComponent {

  @Input() public oneCard: OneCard | null = null;

}
