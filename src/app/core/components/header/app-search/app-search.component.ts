import { Component } from '@angular/core';
import { CardsService } from 'src/app/youtube/services/cards.service';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss'],
})
export class AppSearchComponent {
  constructor(private cardService: CardsService) {}

  public valueInput = this.cardService.getValueInputSearh();

  public changeInput(value: string) {
    this.cardService.setValueInputSearch(value);
  }
}
