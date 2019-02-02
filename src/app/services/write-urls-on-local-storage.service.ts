import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable({
  providedIn: 'root'
})
export class WriteUrlsOnLocalStorageService {

  // @ts-ignore
  constructor(private storage: NativeStorage) {
    this.writeValues();
  }

  private writeValues() {
    return this.storage.setItem('open_data_lpgc_urls', {property : {
        'listOfBusStops' : 'http://apirtod.laspalmasgc.es/api/rest/datasets/guaguas_paradas.json',
        'bus_stops_details' : 'http://apirtod.laspalmasgc.es/api/rest/datasets/guaguas_detalle_paradas.json',
        'bus_number' : 'http://apirtod.laspalmasgc.es/api/rest/datasets/guaguas_lineas.json',
        'buses_trips' : 'assets/data/buses_trips.json'
      }});
  }

  private readValue(key) {
    return this.storage.getItem(key);
  }
}
