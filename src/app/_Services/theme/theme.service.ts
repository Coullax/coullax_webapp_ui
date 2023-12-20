import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme } from './symbols';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThemeService{
  private themeSubject = new BehaviorSubject<string>('light');
  currentTheme = this.themeSubject.asObservable();

  themeChange = new EventEmitter<Theme>();

  constructor(
    @Inject(THEMES) public themes: Theme[],
    @Inject(ACTIVE_THEME) public theme: string
  ) {
  }

  initTheme(){
    this.getActiveTheme();
    document.body.setAttribute('data-theme', this.theme);
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  isDarkMode(){
    return this.theme === 'dark'
  }

  getActiveTheme() {
    if (localStorage.getItem('user-theme')) {
      this.theme = String(localStorage.getItem('user-theme'));
    } else {
      this.theme = 'light';
    }
    // this.themeSubject.next(this.theme);
    const theme = this.themes.find(t => t.name === this.theme);

    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    this.themeSubject.next(this.theme);
    return theme;

  }

  setTheme(name: string) {
    this.theme = name;
    localStorage.setItem('user-theme', name);
    this.themeChange.emit( this.getActiveTheme());
  }



 switchTheme(theme: string) {

 }
}
