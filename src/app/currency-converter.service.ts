import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  private apiUrl = 'https://api.apilayer.com/fixer/latest';

  constructor(private http: HttpClient) {}

  getExchangeRates(baseCurrency: string,targetCurrency: string) {
    const url = `${this.apiUrl}?base=${baseCurrency}&symbols=${targetCurrency}`; 
    const headers = {
      'apiKey': 'dhOIcRf0reczwPps4uiUV83rnvO8dWBV'
    };
    return this.http.get(url, {headers});
  }

}
