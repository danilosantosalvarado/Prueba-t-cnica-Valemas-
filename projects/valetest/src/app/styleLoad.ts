import { Injectable } from "@angular/core";
import { Theme } from "./interface.dto";

@Injectable({
  providedIn: 'root'
})
export class MapTheme {
  applyTheme(theme: Theme) {
    const root = document.documentElement;
    root.style.setProperty('--background-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
  }
}
