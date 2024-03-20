// theme.repository.ts
import { Observable } from 'rxjs';
import { Theme } from './interface.dto';

export abstract class ThemeRepository {
  abstract getTheme(): Observable<Theme>;
}
