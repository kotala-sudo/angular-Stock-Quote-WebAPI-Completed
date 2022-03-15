import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  input: string = 'IBM';

  constructor() {}

  ngOnInit() {}

  onClick(ticker: string){
    this.input = ticker;
  }



}
