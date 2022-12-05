import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-admin-pages',
  templateUrl: './admin-pages.component.html',
  styleUrls: ['./admin-pages.component.scss'],
})
export class AdminPagesComponent implements OnInit {
  constructor(private authServis: AuthService) {}

  ngOnInit(): void {
    this.authServis.setIsLogin(true);
  }

}
