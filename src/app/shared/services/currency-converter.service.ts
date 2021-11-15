import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {

  constructor(private http: HttpClient) {}

  getUserCountry(): Observable<any> {
    return this.http.get(`https://api.db-ip.com/v2/free/self`);
  }

  currencyConverter(): Observable<any> {
    return this.http.get(`https://open.er-api.com/v6/latest/USD`);
  }
}
