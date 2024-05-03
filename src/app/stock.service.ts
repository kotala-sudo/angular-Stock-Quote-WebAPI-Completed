import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from './Stock';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable()
export class StockService {
  endpoint: string =
    'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=';
  //apikey: string = '&apikey=75SILTV90V0SAI22';
  apikey: string = 'U022VZ08SDBYODGU';
  constructor(private http: HttpClient) {}

  getStock(symbol: string): Observable<Stock> {
    return this.http
      .get<Stock>(this.endpoint + symbol + this.apikey)
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}
