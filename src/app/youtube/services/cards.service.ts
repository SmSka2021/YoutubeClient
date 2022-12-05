import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ResponseServer, ResponseServerID } from '@shared/models/request.model';
import { HttpClient } from '@angular/common/http';
import { URL_SEARCH, URL_VIDEO_STATISTIC } from '@shared/models/api-url';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CardsService {
  constructor(private http: HttpClient) { }

  public valueInputSearch$ = new BehaviorSubject<string>('');

  public getValueInputSearh(): string {
    return this.valueInputSearch$.getValue();
  }

  public setValueInputSearch( val: string): void {
    this.valueInputSearch$.next(val);
  }

  public getVideo(value: string): Observable<ResponseServer | number> {
    return this.http.get<ResponseServer | number>(`${URL_SEARCH}/${value}`).pipe(
      catchError((err) => {
        return of(err.status);
      }),
    );
  }

  public getVideoWithStatist(idCards: string): Observable<ResponseServerID | number> {
    return this.http.get<ResponseServerID | number>(`${URL_VIDEO_STATISTIC}${idCards}&part=snippet,statistics`)
      .pipe(
        catchError((err) => {
          return of(err.status);
        }),
      );
  }
}
