export class Stock {
  symbol: string;
  open: number;
  high: number;
  low: number;
  price: number;
  volume: number;
  latestTradingDay: string;
  previousClose: number;
  change: number;
  changePercent: string;
}
/* An example of JSON data returned by the endpoint
{
  "Global Quote": {
      "01. symbol": "IBM",
      "02. open": "124.4500",
      "03. high": "125.1600",
      "04. low": "122.6850",
      "05. price": "123.9400",
      "06. volume": "3284965",
      "07. latest trading day": "2022-03-14",
      "08. previous close": "123.9600",
      "09. change": "-0.0200",
      "10. change percent": "-0.0161%"
  }
}

*/
