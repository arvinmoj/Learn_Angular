import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {

  constructor() 
  {
    this.dollars = 1;
  }

  public dollars: number;

  public getRials(): number
  {

    let result: number =  
      this.dollars * 24.1890;
      
    return result;

  }
}
