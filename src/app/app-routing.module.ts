import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPagesComponent } from './core/pages/notFound/notFound-pages.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AdminPagesComponent } from './auth/pages/admin-pages/admin-pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'authorize', pathMatch:'full' },
  { path: 'home',  canLoad: [AuthGuard],
    loadChildren: () => import ('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: 'authorize', loadChildren: () => import ('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'admin', component: AdminPagesComponent },
  { path: '**', component: NotFoundPagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
