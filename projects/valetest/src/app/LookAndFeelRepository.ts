import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from './interface.dto'; // Importa la interfaz del DTO

@Injectable({
  providedIn: 'root'
})
export abstract class LookAndFeelRepository {
  abstract getLookAndFeel(): Observable<Theme>;
}
