import { Component, ElementRef, ViewChild } from '@angular/core';
import { Application } from '@splinetool/runtime';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent {
  @ViewChild('canvas3d', { static: true }) canvasRef: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/4gmN44zbQezkELdq/scene.splinecode');
  }

}
