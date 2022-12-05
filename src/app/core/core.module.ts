
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { AppHeaderComponent } from './components/header/app-header.component';
import { AppSearchComponent } from './components/header/app-search/app-search.component';
import { AppAuthorizeComponent } from './components/header/app-authorize/app-authorize.component';
import { AppSettingsComponent } from './components/header/app-settings/app-settings.component';
import { NotFoundPagesComponent } from '../core/pages/notFound/notFound-pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AppSortComponent } from './components/header/sortingBlock/app-sort.component';
import { AppFilterComponent } from './components/header/sortingBlock/app-filter/app-filter.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppSearchComponent,
    AppSortComponent,
    AppFilterComponent,
    AppAuthorizeComponent,
    AppSettingsComponent,
    NotFoundPagesComponent,
    FooterComponent,
  ],
  exports: [
    AppHeaderComponent,
    FooterComponent,
    NotFoundPagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,

  ],
})
export class CoreModule { }
