import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusesDataService {

  constructor(private http: HttpClient) {}

  public GetAllBusesStops() {
    return this.http.get('http://datosabiertos.laspalmasgc.es/api/datos/guaguas_paradas/1010.json');
  }
}
