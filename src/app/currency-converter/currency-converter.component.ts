import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  baseCurrency = 'INR';
  targetCurrency = 'EUR';
  amount = 100;
  exchangeRate = 0;
  convertCurrencyValue: number = 0;
  isLoading = false;
  content: string = '';
  showModal: boolean = false;

  constructor(private currencyConverterService: CurrencyConverterService) { }

  ngOnInit(): void {
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.isLoading = true;
    this.currencyConverterService.getExchangeRates(this.baseCurrency, this.targetCurrency).subscribe(
      (response: any) => {
        const rates = response.rates;
        this.isLoading = false;
        this.exchangeRate = rates[this.targetCurrency];
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.content = 'Daily API rate limit Exceeded, Kindly check tommorow';
        this.showModal = true;
      }
    );
  }



  convertCurrency() {
    this.convertCurrencyValue = this.amount * this.exchangeRate;
  }

  onOkBtnPress() {
    this.showModal = false;
    window.location.href = 'https://alwyn-joseph.github.io/findalwyn.github.io/';
  }

}
