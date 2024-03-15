// theme.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from './interface.dto';
import { LookAndFeelRepository } from './LookAndFeelRepository';

@Injectable({
  providedIn: 'root'
})
export class ThemeService extends LookAndFeelRepository {
  private readonly url = './assets/look-and-feel.json';

  constructor(private http: HttpClient) {
    super();
  }

  getLookAndFeel(): Observable<Theme> {
    return this.http.get<Theme>(this.url);
  }
}
