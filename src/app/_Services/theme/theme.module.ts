import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './theme.service';

import { THEMES, ACTIVE_THEME, ThemeOptions } from './symbols';
import {ThemeDirective} from "./theme.directives";

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective]
})
export class ThemeModule {
  static forRoot(options: ThemeOptions) :ModuleWithProviders<any>{
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.active
        }
      ]
    };
  }
}
