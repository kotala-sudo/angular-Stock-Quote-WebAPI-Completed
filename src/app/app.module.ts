import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {StockService} from './stock.service';

import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, StockComponent],
  bootstrap: [AppComponent],
  providers: [StockService]
})
export class AppModule {}
