import { Pipe, PipeTransform } from '@angular/core';
import { OneCard } from '../../shared/models/request.model';
@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {

  public transform(item: OneCard[], sortBy: string, status: string): OneCard[] {
    if (!item || !sortBy || !status) return item;
    const arrCards = [...item];
    if (sortBy === 'date' && status === 'increase') {
      return  arrCards.sort((a, b)=>
        Date.parse(a.snippet.publishedAt.slice(0, 10)) - Date.parse(b.snippet.publishedAt.slice(0, 10)));
    }
    if (sortBy === 'date' && status === 'descending') {
      return  arrCards.sort((a, b)=>
        Date.parse(b.snippet.publishedAt.slice(0, 10)) - Date.parse(a.snippet.publishedAt.slice(0, 10)));
    }
    if (sortBy === 'views' && status === 'increase') {
      return  arrCards.sort((a, b)=> +a.statistics.viewCount - +b.statistics.viewCount );
    }
    if (sortBy === 'views' && status === 'descending') {
      return  arrCards.sort((a, b)=> +b.statistics.viewCount - +a.statistics.viewCount );
    }
    return arrCards;
  }

}
