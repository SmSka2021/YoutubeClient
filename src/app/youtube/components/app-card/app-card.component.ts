import { Component, Input } from '@angular/core';
import { OneCard } from './../../../shared/models/request.model';
import { DetailInfoCardService } from '../../services/detail-info-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss'],
})
export class AppCardComponent {
  constructor(private detailInfoCard: DetailInfoCardService, private router: Router) {}

  @Input() public oneCard!: OneCard;

  public showDetailCard(id: string) {
    if (this.oneCard) {
      this.detailInfoCard.setIdCheckCard(id);
      this.router.navigate(['home', this.oneCard.id]);
    }

  }
}
