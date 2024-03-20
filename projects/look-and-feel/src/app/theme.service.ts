// theme.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from './interface.dto';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly url = './assets/look-and-feel.json';

  constructor(private http: HttpClient) { }

  getTheme(): Observable<Theme> {
    return this.http.get<Theme>(this.url);
  }
}
