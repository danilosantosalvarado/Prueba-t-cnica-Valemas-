import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service'
import { LookAndFeelRepository } from './LookAndFeelRepository';
import { MapTheme } from './styleLoad'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: LookAndFeelRepository, useClass: ThemeService  }]
})
export class AppComponent implements OnInit {
  title = 'Valetest';
  constructor(private lookAndFeelRepository: LookAndFeelRepository, private mapTheme: MapTheme) {}

  ngOnInit() {
    this.lookAndFeelRepository.getLookAndFeel().subscribe(data => {
      this.mapTheme.applyTheme(data);
    });
  }
}
