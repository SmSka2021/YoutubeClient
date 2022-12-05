import { Pipe, PipeTransform } from '@angular/core';
import { OneCard } from './../../shared/models/request.model';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  public transform(arrCards: OneCard[], search: string):  OneCard[] {
    if (search.length === 0) return arrCards;
    return arrCards.filter(card => card.snippet.title.toLowerCase().includes(search.toLowerCase()));
  }
}
