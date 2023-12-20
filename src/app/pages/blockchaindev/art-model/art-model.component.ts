import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Application } from '@splinetool/runtime';
import { ThemeService } from 'src/app/_Services/theme/theme.service';


@Component({
  selector: 'app-art-model',
  templateUrl: './art-model.component.html',
  styleUrls: ['./art-model.component.scss']
})

export class ArtModelComponent implements OnInit {
  @ViewChild('canvas3d', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themeService.currentTheme.subscribe(theme => {
      const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
      const app: Application = new Application(canvas);
      if (theme === 'light') {
        app.load('https://prod.spline.design/6p4zPYN51A3bC2HL/scene.splinecode');
      } else {
        app.load('https://prod.spline.design/y27l7kAcAI9mrGzi/scene.splinecode');
      }
    });
  }

  switchTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
 }
