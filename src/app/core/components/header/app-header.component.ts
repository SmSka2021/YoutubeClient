import { Component } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { SortService } from '@core/services/sort.service';
import { Router } from '@angular/router';
import { CardsService } from '@youtube/services/cards.service';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  constructor(public authService: AuthService,
    public sortService: SortService,
    public cardService: CardsService, private router: Router) {}

  public getAdminPage() {
    if (this.authService.getIsLogin()) {
      this.router.navigateByUrl('admin');
    } else {
      this.cardService.setValueInputSearch('');
      this.router.navigateByUrl('authorize');

    }
  }
}
