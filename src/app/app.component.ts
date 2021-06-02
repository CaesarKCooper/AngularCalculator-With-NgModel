import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-discount-calculator';

public PriceInput!: number
public DiscountAmountInput!: number
public Answer!: number

discount(){
this.Answer = this.PriceInput - (this.PriceInput*(this.DiscountAmountInput/100));
}
}
