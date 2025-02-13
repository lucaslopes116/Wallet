import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getPrice(ticker: string) {
    // Integração com a API Brapi aqui (exemplo estático)
    return JSON.stringify({
      ticker,
      price: 500,
    });
  }
}
