import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Stock } from './../Stock';
import { StockService } from './../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css'],
})
export class StockComponent implements OnInit {
  @Input() tickerValue: string = 'IBM';

  stock: Stock;
  constructor(private service: StockService) {}

  ngOnInit() {
    // this.helper(this.tickerValue);
  }

  helper(ticker: string) {
    this.service.getStock(ticker).subscribe((data) => {
      // alert(JSON.stringify(data));
      let x: Stock = data['Global Quote'];
      this.stock = x;
      // alert(this.stock['01. symbol']);
    });
  }

  // ngOnChanges(changes: SimpleChanges){
  //   console.log(changes.previousValue);
  //  this.helper();
  // }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges - data is ${this.tickerValue}`);
    for (let key in changes) {
      console.log(`${key} changed.
      Current: ${changes[key].currentValue}.
      Previous: ${changes[key].previousValue}`);
      // this.tickerValue = changes[key].currentValue;
      this.helper(this.tickerValue);
    }
    // this.helper(changes[key].currentValue);
  }

  // ngAfterViewInit() {
  //   this.helper();
  // }
}
