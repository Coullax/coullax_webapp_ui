import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SplineData } from './spline-data.model';


@Injectable({
    providedIn: 'root'
  })
  export class SplineService {
    constructor(private http: HttpClient) { }
  
    getSplineData(url: string) {
      return this.http.get<SplineData>(url);
    }
  }
  