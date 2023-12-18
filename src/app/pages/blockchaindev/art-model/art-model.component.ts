import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { Application } from '@splinetool/runtime';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // GLTFLoader for Angular
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls typeimport { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import SplineLoader from '@splinetool/loader';


@Component({
  selector: 'app-art-model',
  templateUrl: './art-model.component.html',
  styleUrls: ['./art-model.component.scss']
})

export class ArtModelComponent implements AfterViewInit {
  // @ViewChild('rendererContainer', { static: true }) rendererContainer: ElementRef<HTMLDivElement>;

  // private scene: THREE.Scene;
  // private camera: THREE.PerspectiveCamera;
  // private renderer: THREE.WebGLRenderer;
  // private controls: OrbitControls;

  // constructor() { }

  // ngOnInit() {
  //   this.initThree();
  //   this.loadSpline();
  //   this.animate();
  //   window.addEventListener('resize', this.onWindowResize.bind(this));
  // }

  // ngOnDestroy() {
  //   window.removeEventListener('resize', this.onWindowResize.bind(this));
  // }

  // private initThree() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   this.scene = new THREE.Scene();

  //   this.camera = new THREE.PerspectiveCamera(45, width / height, 70, 100000);
  //   this.camera.position.set(675.76, 178.47, 227.72);
  //   this.camera.quaternion.setFromEuler(new THREE.Euler(-0.66, 1.17, 0.62));

  //   this.renderer = new THREE.WebGLRenderer({ antialias: true });
  //   this.renderer.setSize(width, height);
  //   this.renderer.shadowMap.enabled = true;
  //   this.renderer.shadowMap.type = THREE.PCFShadowMap;
  //   this.renderer.setClearColor('#ffff', 1);

  //   this.renderer.domElement.style.display = 'block';
  //   this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);

  //   this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  //   this.controls.enableDamping = true;
  //   this.controls.dampingFactor = 0.125;
  // }

  // private loadSpline() {
  //   const loader = new SplineLoader();
  //   loader.load(
  //     'https://prod.spline.design/y27l7kAcAI9mrGzi/scene.splinecode',
  //     (splineScene) => {
  //       this.scene.add(splineScene);
  //     }
  //   );
  // }

  // private onWindowResize() {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  //   this.camera.aspect = width / height;
  //   this.camera.updateProjectionMatrix();
  //   this.renderer.setSize(width, height);
  // }

  // private animate() {
  //   const animateFn = () => {
  //     requestAnimationFrame(animateFn);
  //     this.controls.update();
  //     this.renderer.render(this.scene, this.camera);
  //   };
  //   animateFn();
  // }

  @ViewChild('canvas3d', { static: true }) canvasRef: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    const app = new Application(canvas);
    app.load('https://prod.spline.design/g0qjQxb89G0dnY82/scene.splinecode');
    // app.load('https://prod.spline.design/y27l7kAcAI9mrGzi/scene.splinecode');
  }
}