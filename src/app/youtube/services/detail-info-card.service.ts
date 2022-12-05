import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResponseOneCard } from '@shared/models/request.model';
import { HttpClient } from '@angular/common/http';
import { URL_ONE_VIDEO } from '@shared/models/api-url';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DetailInfoCardService {
  constructor(private http: HttpClient) { }

  public idCheckCard$ = new BehaviorSubject<string>('');

  public setIdCheckCard(value: string): void {
    this.idCheckCard$.next(value);
  }

  public getDetailCheckCard(idCard: string): Observable<ResponseOneCard> {
    return this.http.get<ResponseOneCard>(`${URL_ONE_VIDEO}${idCard}&part=snippet,statistics`).pipe(
      catchError((err) => {
        return of(err.status);
      }),
    );
  }
}
