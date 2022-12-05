import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { SortService } from './core/services/sort.service';
import { FilterService } from './core/services/filter.service';
import { AuthGuard } from './core/guards/auth-guard.service';
import { CardsService } from './youtube/services/cards.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UrlInterceptor } from '@core/interceptor/url.interceptor';
import { StoreModule } from '@ngrx/store';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment.prod';
import { appReducer } from './store/reducers/app-reducer.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ 'myState': appReducer } ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    SortService,
    FilterService,
    AuthGuard,
    CardsService,
    { provide: HTTP_INTERCEPTORS, useClass:  UrlInterceptor, multi: true },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
