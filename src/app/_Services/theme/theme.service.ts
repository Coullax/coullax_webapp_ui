import { Injectable, Inject, EventEmitter } from '@angular/core';
import { THEMES, ACTIVE_THEME, Theme } from './symbols';

@Injectable()
export class ThemeService{


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
    const theme = this.themes.find(t => t.name === this.theme);
    if (!theme) {
      throw new Error(`Theme not found: '${this.theme}'`);
    }
    return theme;

  }

  setTheme(name: string) {
    this.theme = name;
    localStorage.setItem('user-theme', name);
    this.themeChange.emit( this.getActiveTheme());
  }

}
