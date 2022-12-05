import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardsComponent } from './components/app-cards/app-cards.component';
import { AppCardComponent } from './components/app-card/app-card.component';
import { AppCardInfoComponent } from './components/app-card-info/app-card-info.component';
import { YoutubePagesComponent } from './pages/youtube-pages/youtube-pages.component';
import { SharedModule } from './../shared/shared.module';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import {  Routes, RouterModule } from '@angular/router';
import { DetailInfoPagesComponent } from './pages/detail-info-pages/detail-info-pages.component';
import { DetailInfoCardComponent } from './components/detail-info-card/detail-info-card.component';
import { DetailInfoCardService } from './services/detail-info-card.service';
import { BorderColorDirective } from './directives/border-color.directive';
import { AdminCardsComponent } from './components/admin-cards/admin-cards.component';

const routes: Routes = [
  { path: '', component: YoutubePagesComponent },
  { path: ':id', component: DetailInfoPagesComponent },
];
@NgModule({
  declarations: [
    YoutubePagesComponent,
    AppCardsComponent,
    AppCardComponent,
    AppCardInfoComponent,
    SortPipe,
    FilterPipe,
    DetailInfoPagesComponent,
    DetailInfoCardComponent,
    BorderColorDirective,
    AdminCardsComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    DetailInfoCardService,
  ],
})
export class YoutubeModule { }
